import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const increaseQuantity = (productId) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };
    
    const decreaseQuantity = (productId) => {
        setCartItems(prevItems => prevItems.map(item =>
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingProductIndex = prevItems.findIndex(item => item.id === product.id);
            if (existingProductIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingProductIndex] = {
                    ...updatedItems[existingProductIndex],
                    quantity: updatedItems[existingProductIndex].quantity + 1
                };
                return updatedItems;
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };
    
    const removeFromCart = (productId) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== productId));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const itemPrice = parseFloat(item.price); 
            return total + (itemPrice * item.quantity);
        }, 0);
    };


    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};
