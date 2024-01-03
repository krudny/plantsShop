import Footer from "../components/Footer";
import Nav from "../components/Nav";
import LoadingOverlay from "../components/Overlay";
import "../styles/contact.css";
import React, { useState, useEffect } from 'react';

export default function Contact() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, Math.floor(Math.random() * (1000 - 500 + 1) + 500));
    }, []);

    return (
    <div className="contact--container">
        <LoadingOverlay isLoading={isLoading}/>
        <Nav />
            <div className="contact--wrapper">
                <div className="contact-text">
                    <p className="contact-1">How to reach us?</p>
                    <p className="contact-2">You can leave your mail here</p>
                </div>
                <div className="form-box flex">
                    <form className="form flex">
                    <input type="text" className="input" id="name" placeholder="Your name" />
                    <input type="text" className="input" id="email" placeholder="Your email" />
                    <input type="text" className="input" id="text" placeholder="What are we going to talk about?" />
                    <button className="add--cart" type="submit">Send</button>
                    </form>
                </div>
            </div>
        <Footer />
    </div>
    );
}
