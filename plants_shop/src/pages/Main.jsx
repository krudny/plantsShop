import Hero from "../components/Hero"
import NewPlant from "../components/NewPlant"
import IndoorCollection from "../components/IndoorCollection"
import House from  "../components/House"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"
import LoadingOverlay from "../components/Overlay"
import { useState, useEffect } from 'react';

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
            <IndoorCollection />
            <House />
            <AboutUs />
            <Footer />
        </>
    )
}