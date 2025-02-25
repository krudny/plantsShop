import "../styles/pagination.css";

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  const getPages = () => {
    if (totalPages < 6) return [...Array(totalPages)].map((_, i) => i);
    if (currentPage === 0) return [0, 1, 2, "...", totalPages - 1];
    if (currentPage === totalPages - 1)
      return [0, "...", totalPages - 3, totalPages - 2, totalPages - 1];
    return [
      0,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages - 1,
    ];
  };

  return (
    <div className="pagination--wrapper">
      {getPages().map((page, i) =>
        page === "..." ? (
          <span key={i}>...</span>
        ) : (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            disabled={currentPage === page}
            className="pagination--button"
          >
            {page + 1}
          </button>
        ),
      )}
    </div>
  );
}
