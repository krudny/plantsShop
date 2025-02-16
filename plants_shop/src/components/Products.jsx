import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/products.css"
import Product from "./Product"
// import data from "../data/products"

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/products")
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