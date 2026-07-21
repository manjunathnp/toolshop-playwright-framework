import { BaseApiClient } from "./BaseApiClient";
import { Product } from "../test-data/types";

export class ProductsApiClient extends BaseApiClient {
  async getAllProducts(): Promise<Product[]> {
    const response = await this.request.get("/products");

    if (!response.ok()) {
      throw new Error(
        `Products Fetching failed with status ${response.status()}`,
      );
    }
    const responseBody = await response.json(); 
    return responseBody.data;
  }
}
