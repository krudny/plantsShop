import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/admin-products.css"
import AdminProduct from "./AdminProduct"
import Nav from "./Nav";
import Footer from "./Footer";

export default function AdminProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error("Błąd podczas pobierania danych:", error));
    }, []);

    const productComponents = products.map((item) => {
        return (
            <AdminProduct key={item.id} product={item} />
        )
    })
    return (
        <div>
            <Nav />
            {productComponents}
            <Footer />
        </div>
    )
}