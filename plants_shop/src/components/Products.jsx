import { useState, useEffect } from "react";
import "../styles/products.css";
import Product from "./Product";
import LoadingOverlay from "./LoadingOverlay.jsx";
import ProductService from "../services/ProductService.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ProductService.getAllProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania danych:", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const productComponents = products.map((item) => {
    return <Product key={item.product_id} item={item} />;
  });

  if (isLoading) {
    return <LoadingOverlay externalLoading={isLoading} />;
  }

  return (
    <>
      <div className="products--wrapper">
        <div className="products--grid">{productComponents}</div>
      </div>
    </>
  );
}
