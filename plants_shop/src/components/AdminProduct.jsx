import React from 'react';
import { useNavigate } from 'react-router-dom';

import ProductService from '../services/ProductService';
import "../styles/admin-products.css"

export default function Product({ product }) {
    const navigate = useNavigate();

    const handleUpdateClick = () => {
        navigate(`/updateproduct/${product.id}`)
    };

    const handleRemoveClick = () => {
        ProductService.deleteProduct(product.id);
        navigate('/adminproducts');
    }

    return (
        <li className='admin-product'>
            <div className='admin-imagePage'><img className='admin-image' src={`../src/assets/${product.image}`} alt={product.name} /></div>
            <div className='admin-title'>{product.name}</div>
            <div className='admin-description'>{product.description}</div>
            <div className='admin-buttons'>
                <button className="admin-button" onClick={handleUpdateClick}> UPDATE </button>
                <button className="admin-button" onClick={handleRemoveClick}> REMOVE </button>
            </div>
        </li>
    )
}