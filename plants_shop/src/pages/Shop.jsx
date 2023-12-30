import Nav from "../components/Nav"
import Products from "../components/Products"
import Footer from "../components/Footer"
import React, { useState, useEffect } from 'react';
import LoadingOverlay from "../components/Overlay";

export default function Shop(){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, Math.floor(Math.random() * (1000 - 500 + 1) + 500));
    }, []);

    return (
        <>
            <LoadingOverlay isLoading={isLoading} />
            <Nav />
            <Products />
            <Footer />
        </>
    )
}