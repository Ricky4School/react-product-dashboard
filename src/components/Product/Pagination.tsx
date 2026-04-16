type Props = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onChange: (page: number | "prev" | "next") => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onChange,
}: Props) {
  const start = (currentPage - 1) * pageSize + 1;

  const end = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="flex justify-between flex-wrap">
      <div className="flex gap-2 items-center">
        <button
          onClick={() => onChange("prev")}
          disabled={currentPage === 1}
          className="px-2 py-1 border disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            id={`page-${p}`}
            onClick={() => onChange(p)}
            className={`px-2 py-1 border ${
              p === currentPage ? "bg-gray-300" : ""
            }`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => onChange("next")}
          disabled={currentPage === totalPages}
          className="px-2 py-1 border disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <div className="px-2 py-1">
        Showing {start} to {end} of {totalItems} entries
      </div>
    </div>
  );
}
