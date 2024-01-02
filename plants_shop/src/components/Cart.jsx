import "../styles/cart.css"
import {useCart} from "../components/CartContext.jsx"
import Footer from "./Footer.jsx";
import Nav from "./Nav.jsx";
import CartItem from "./CartItem.jsx";
import LoadingOverlay from "./Overlay.jsx";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Cart(){
    const { cartItems, calculateTotal, reset } = useCart();

    const items = cartItems.map((item) => {
        return (
          <CartItem key={item.id} item={item} />
        )
    })

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, Math.floor(Math.random() * (600 - 250 + 1) + 250));
    }, []);

    const resetScroll = () => {
        window.scrollTo(0, 0);
    };


    return (
        <>
        <LoadingOverlay isLoading={isLoading}/>
        <div className="cart--container">
            <Nav />
            <div className="items--wrapper">
                {cartItems.length > 0 ? (
                    <>
                        <p>Here are your precisely chosen plants!</p>
                        <div className="product--wrapper">
                            {items}
                        </div>
                        <div className="cart--total">
                            <p>Total Amount: {calculateTotal().toFixed(2)} zł</p>
                            <Link to="/"><button className="add--cart" onClick={() => { reset(); resetScroll(); }}>Finish order!</button></Link>
                        </div>
                    </>) : (
                        <p>Your cart is empty :c</p> )
                }
            </div>
            <Footer />
        </div>  
        </>
    );
}