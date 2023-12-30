import Hero from "../components/Hero"
import NewPlant from "../components/NewPlant"
import LoadingOverlay from "../components/Overlay"
import React, { useState, useEffect } from 'react';



export default function Main() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, Math.floor(Math.random() * (1000 - 500 + 1) + 500));
    }, []);

    return (
        <>
            <LoadingOverlay isLoading={isLoading} />
            <Hero />
            <NewPlant />
        </>
    )
}