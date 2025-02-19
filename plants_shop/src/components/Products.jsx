import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/products.css"
import Product from "./Product"

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://dot-plants-shop-456351161172.us-central1.run.app/api/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Błąd podczas pobierania danych:", error));
    }, []);

    const productComponents = products.map((item) => {
        return (
            <Product key={item.id} item={item} />
        )
    })
    return (
        <div className="products--wrapper">
            <div className="products--grid">
                {productComponents}
            </div>
        </div>
    )
}