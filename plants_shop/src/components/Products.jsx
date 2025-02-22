import { useState, useEffect } from "react";
import "../styles/products.css";
import Product from "./Product";
import LoadingOverlay from "./LoadingOverlay.jsx";
import ProductService from "../services/ProductService.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = window.innerWidth > 1200 ? 16 : window.innerWidth > 900 ? 12 :  window.innerWidth > 600 ? 6 : 4;


  const getPages = () => {
    if (totalPages < 6) return [...Array(totalPages)].map((_, i) => i);
    if (currentPage === 0) return [0, 1, 2, '...', totalPages - 1];
    if (currentPage === totalPages - 1) return [0, '...', totalPages - 3,  totalPages - 2, totalPages - 1];
    return [0, '...',currentPage -1, currentPage, currentPage + 1, '...', totalPages - 1];
  };


  useEffect(() => {
    setIsLoading(true);
    ProductService.getAllProducts(currentPage, itemsPerPage)
      .then((response) => {
        setProducts(response.content);
        setTotalPages(response.totalPages);
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania danych:", error);
      })
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  const productComponents = products.map((item) => {
    return <Product key={item.product_id} item={item} />;
  });


  return (
    <>
      {isLoading && <LoadingOverlay externalLoading={isLoading} />}
      <div className="products--wrapper">
        <div className="products--grid">
          {productComponents}
        </div>
        <div className="pagination--wrapper">
          {getPages().map((page, i) =>
              page === '...' ? (
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
              )
          )}
        </div>
      </div>
    </>
  );
}
