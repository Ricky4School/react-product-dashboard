import { useState } from "react";
import type { Product } from "@/types/Product/Response/ProductResponse";

type Props = {
  onAdd: (product: Product) => void;
};

export default function ProductForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !price) return;

    const newProduct: Product = {
      id: Date.now(),
      title,
      price: Number(price),
    };

    onAdd(newProduct);

    setTitle("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2"
      />

      <button type="submit" className="px-3 py-2 bg-blue-500 text-white">
        Add
      </button>
    </form>
  );
}
