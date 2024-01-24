import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import AuthService from "../services/AuthService";
import LoadingOverlay from "../components/Overlay";
import ProductService from '../services/ProductService';
import '../styles/contact.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const UpdateProductPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, Math.floor(Math.random() * (1000 - 500 + 1) + 500));
    }, []);

    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser || !currentUser.roles || !currentUser.roles.includes('ROLE_ADMIN')) {
            navigate('/');
        }
    }, [navigate]);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const details = await ProductService.getProductById(productId);
                setProductDetails(details);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [productId]);

    const handleUpdate = async (updatedProduct) => {
        try {
            await ProductService.updateProduct(updatedProduct);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className="contact--container">
            <img className="img1" src="../../src/assets/contact2.png" />
            <img className="img2" src="../../src/assets/contact2.png" />
            <Nav />
            <LoadingOverlay isLoading={isLoading} />
            <div className="contact--wrapper">
                <div className="contact-text">
                    <p className="contact-1">Update Product</p>
                </div>
                {productDetails && <ProductForm product={productDetails} onSubmit={handleUpdate} />}
            </div>
            <Footer />
        </div>
    );
};

export default UpdateProductPage;
