import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../components/Overlay";
import "../styles/admin-products.css"
import AdminProduct from "./AdminProduct"
import AuthService from "../services/AuthService";
import Nav from "./Nav";
import Footer from "./Footer";

export default function AdminProducts() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, Math.floor(Math.random() * (1000 - 500 + 1) + 500));
    }, []);

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();


        if (!currentUser || !currentUser.roles || !currentUser.roles.includes('ROLE_ADMIN')) {
            navigate('/');
        }
    }, [navigate]);

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

    const handleAddButton = () => {
        navigate('/addproduct');
    }

    return (
        <div>
            <Nav />
            <LoadingOverlay isLoading={isLoading} />
            <div className="admin-button-box">
                <button className="admin-button" onClick={handleAddButton}>add new product</button>
            </div>
            {productComponents}
            <Footer />
        </div>
    )
}