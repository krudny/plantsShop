import { useState, useEffect } from "react";
import "../styles/products.css";
import "../styles/pagination.css";
import Product from "./Product";
import LoadingOverlay from "./LoadingOverlay.jsx";
import ProductService from "../services/ProductService.jsx";
import {resetScroll} from "../utils/resetScroll.jsx";
import Pagination from "./Pagination.jsx";

export default function Products() {
  resetScroll();
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = window.innerWidth > 1200 ? 16 : window.innerWidth > 900 ? 12 :  window.innerWidth > 600 ? 6 : 4;


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
    return <Product key={item.productID} item={item} />;
  });




  return (
    <>
      {isLoading && <LoadingOverlay externalLoading={isLoading} />}
      <div className="products--wrapper">
        <div className="products--grid">
          {productComponents}
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
}
