import { Prisma, Product } from "@prisma/client";
import { stripe } from "../orders/controller";
import { prisma } from "../../../prisma/prisma";

export type ProductCreationParams = Pick<
  Product,
  "name" | "price"
>;

export class ProductModel {
  async create(data: ProductCreationParams): Promise<void> {
    const product = await stripe.products.create({
      name: data.name,
      default_price_data: {
        unit_amount: Number(data.price) * 100,
        currency: "eur",
      },
    });
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: Number(data.price) * 100,
      currency: "eur",
    });
  }
  async findProductById(id: Product["id"]): Promise<Product | null> {
    return await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
  }
  async deleteProductById(id: Product["id"]): Promise<void> {
    await stripe.products.del(id.toString());
    await prisma.product.delete({
      where: {
        id: id,
      },
    });
  }
  async sortProducts(
    priceRange?: string,
    orderBy?: Prisma.SortOrder,
    searchItem?: string
  ): Promise<Product[]> {
    const priceRangeArr = priceRange?.split(",") || "";
    return await prisma.product.findMany({
      where: {
        AND: [
          {
            price: {
              gte: priceRangeArr[0],
              lte: priceRangeArr[1],
            },
          },
          {
            name: {
              search: searchItem,
            },
          },
        ],
      },
      orderBy: {
        ...(orderBy ? { price: orderBy } : {}),
      },
    });
  }
}
