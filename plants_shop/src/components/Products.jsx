import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "../styles/products.css";
import Product from "./Product";
import LoadingOverlay from "./LoadingOverlay.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPromise = useMemo(() => {
    return axios.get(
      "https://dot-plants-shop-456351161172.us-central1.run.app/api/products",
    );
  }, []);

  useEffect(() => {
    fetchPromise
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Błąd podczas pobierania danych:", error);
        setIsLoading(false);
      });
  }, [fetchPromise]);

  const productComponents = products.map((item) => {
    return <Product key={item.id} item={item} />;
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
