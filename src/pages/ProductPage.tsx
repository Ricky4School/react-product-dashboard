import { useState, useMemo, useEffect } from "react";
import useProducts from "../hooks/useProducts";
import ProductTable from "../components/Product/ProductTable";
import SearchBar from "../components/Product/SearchBar";
import Pagination from "../components/Product/Pagination";
import ProductForm from "../components/Product/ProductForm";
import type { Product } from "@/types/Product/Response/ProductResponse";

export default function ProductPage() {
  const { products, setProducts, fetchProducts } = useProducts();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ================= init Start =================
  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        setError(null);

        await fetchProducts();
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);
  // ================= init End =================

  // ================= Search Start =================
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  // ================= Search End =================

  // ================= Pagination Start =================
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const totalPages = useMemo(() => {
    return Math.ceil(filteredProducts.length / pageSize);
  }, [filteredProducts.length, pageSize]);

  const prevDisabled = currentPage <= 1;
  const nextDisabled = currentPage >= totalPages;

  const pageOffset = useMemo(() => {
    return (currentPage - 1) * pageSize;
  }, [currentPage, pageSize]);

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(pageOffset, pageOffset + pageSize);
  }, [filteredProducts, pageOffset, pageSize]);

  const handlePageChange = (page: number | "prev" | "next") => {
    if (page === "prev" && !prevDisabled) {
      setCurrentPage((p) => p - 1);
    } else if (page === "next" && !nextDisabled) {
      setCurrentPage((p) => p + 1);
    } else if (typeof page === "number") {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [search, products]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [totalPages]);

  useEffect(() => {
    if (!totalPages) return;

    const el = document.getElementById(`page-${currentPage}`);
    el?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [currentPage, totalPages]);

  // ================= Pagination End =================

  // ================= Add Product Start =================
  const handleAddProduct = (newProduct: Product) => {
    setProducts((productList: Product[]) => [newProduct, ...productList]);
  };
  // ================= Add Product End =================

  // ================= UI States Start =================
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  // ================= UI States End =================

  // ================= Render Start =================
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Product Dashboard</h1>

      <SearchBar value={search} onChange={setSearch} />

      <ProductForm onAdd={handleAddProduct} />

      <ProductTable products={paginatedProducts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredProducts.length}
        pageSize={pageSize}
        onChange={handlePageChange}
      />
    </div>
  );
  // ================= Render End =================
}
