import Nav from "../components/Nav"
import Products from "../components/Products"
import Footer from "../components/Footer"
import { useState, useEffect } from 'react';
import LoadingOverlay from "../components/Overlay";

export default function Shop(){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, Math.floor(Math.random() * (800 - 300 + 1) + 300));
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