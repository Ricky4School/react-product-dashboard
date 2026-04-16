import type { Product } from "@/types/Product/Response/ProductResponse";

type Props = {
  products: Product[];
};

export default function ProductTable({ products }: Props) {
  if (products.length === 0) {
    return <p className="text-gray-500">No products found</p>;
  }

  return (
    <div className="table-responsive">
      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-2 border flex justify-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-12 h-12 object-cover"
                />
              </td>
              <td className="p-2 border">{product.title}</td>
              <td className="p-2 border">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
