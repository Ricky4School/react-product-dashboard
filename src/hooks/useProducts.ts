import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import type { Product } from "@/types/Product/Response/ProductResponse";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res);
  };

  return {
    products,
    setProducts,
    fetchProducts,
  };
}
