import { useParams } from 'react-router-dom';
import data from '../data/products'
import Nav from '../components/Nav';
import "../styles/product-page.css"
import React, { useState, useEffect } from 'react';
import LoadingOverlay from "../components/Overlay";
import Footer from '../components/Footer';
import {useCart} from '../components/CartContext'

export default function ProductPage() {
    let { name } = useParams();
    const product = data.find(p => p.name === name);
    const { addToCart } = useCart();

    const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
          setTimeout(() => {
          setIsLoading(false);
          }, Math.floor(Math.random() * (700 - 300 + 1) + 300));
      }, []);

    

    return (
    <>
        <LoadingOverlay isLoading={isLoading} />
        <div className="container">
            <Nav />
            <div className="wrapper">
                <div className="product--page--img">
                  <img src={`../src/assets/${product.img}`} />
                </div>
                <div className="product--page--info ">
                  <p className="product--page--name">{product.name}</p>
                  <p className="product--page--price">{product.price}</p>
                  <p className="product--page--description">{product.longDescription}</p>
                  <button className="add--cart" onClick={() => addToCart(product)}>Add to cart</button>
                </div>
            </div>
            <Footer />
        </div>
        
    </>
    );
}
