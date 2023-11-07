import { Prisma, Product } from "@prisma/client";
import { NotFoundError } from "../../helpers/errors";
import { ProductModel } from "./model";
const ProductModelInstance = new ProductModel();

export class ProductService {
  async get(id: Product["id"]): Promise<Product> {
    const product = await ProductModelInstance.findProductById(id);
    if (!product) {
      throw new NotFoundError("Product not found");
    }
    return product;
  }
  async delete(id: Product["id"]): Promise<void> {
    return await ProductModelInstance.deleteProductById(id);
  }
  async sortProducts(
    priceRange?: string,
    orderBy?: Prisma.SortOrder,
    searchItem?: string
  ): Promise<Product[]> {
    return await ProductModelInstance.sortProducts(
      priceRange,
      orderBy,
      searchItem
    );
  }
  async getCheapestProduct(): Promise<Product | null> {
    return await ProductModelInstance.getCheapestProduct();
  }
  async getHighestPriceProduct(): Promise<Product | null> {
    return await ProductModelInstance.getHighestPriceProduct();
  }
}
