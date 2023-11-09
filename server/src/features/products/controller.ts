import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Put,
  Route,
  SuccessResponse,
  Tags,
  Security,
  Query,
} from "tsoa";
import { Prisma, Product, ProductOrder } from "@prisma/client";
import { ProductService } from "./services";
import { OrderService } from "../orders/services";
import { ProductUpdateParams } from "../orders/model";

@Route("products")
@Tags("Products")
export class ProductsController extends Controller {
  /**
   * Retrieves a list of all products in the system. If filtering criteria are provided, filters the list of products.
   * @returns List of products
   */
  @Get()
  public async getProducts(
    @Query() priceRange?: string,
    @Query() orderBy?: Prisma.SortOrder,
    @Query() searchTerm?: string
  ): Promise<Product[]> {
    return new ProductService().sortProducts(priceRange, orderBy, searchTerm);
  }
  /**
   * Retrieves the detailes of a particular product provided the unique product ID.
   * @param productId Identifier of the product
   * @returns Product
   */
  @Get("{productId}")
  public async getProduct(@Path() productId: number): Promise<Product> {
    return new ProductService().get(productId);
  }
  /**
   * Returns a ProductOrder provided the product ID.
   */
  @Get("/{productId}/product-orders")
  public async getProductOrderByProductId(
    @Path() productId: number
  ): Promise<ProductOrder | null> {
    return new OrderService().getProductOrderByProductId(productId);
  }
  /**
   * Updates inventory provided the product ID.
   */
  @Put("{productId}")
  public async updateInventory(
    @Path() productId: number,
    @Body() requestBody: ProductUpdateParams
  ): Promise<Product> {
    return new ProductService().updateInventory(
      productId,
      requestBody.quantity
    );
  }
  /**
   * Deletes a product from the system.
   * @param productId Identifier of the product
   */
  @Security("jwt", ["admin"])
  @SuccessResponse("204", "Product deleted")
  @Delete("{productId}")
  public async deleteProduct(@Path() productId: number): Promise<void> {
    this.setStatus(204);
    new ProductService().delete(productId);
    return;
  }
}
