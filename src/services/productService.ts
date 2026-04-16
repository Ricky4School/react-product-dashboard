import httpClient from "./HttpClient";
import type {
  ProductResponse,
  Product,
} from "@/types/Product/Response/ProductResponse";

export const getProducts = async (): Promise<Product[]> => {
  const res = await httpClient.get<ProductResponse>("/products");
  return res.data.products;
};

export const getProduct = async (id: number): Promise<Product> => {
  const res = await httpClient.get(`/products/${id}`);
  return res.data;
};
