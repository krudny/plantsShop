import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../components/Overlay";

import AuthService from "../services/AuthService";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../styles/contact.css"
import "../styles/admin-board.css"

const BoardAdmin = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, Math.floor(Math.random() * (1000 - 500 + 1) + 500));
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser || !currentUser.roles || !currentUser.roles.includes('ROLE_ADMIN')) {
            navigate('/');
        }
    }, [navigate]);

    const handleProfile = () => {
        navigate("/profile");
    }

    const handleProducts = () => {
        navigate("/adminproducts")
    }

    return (
        <div className="admin-board-container">
            <Nav />
            <LoadingOverlay isLoading={isLoading} />
            <div className="admin-board-wrapper">
                <h1>Welcome to admin board!</h1>
                <div className="admin-board-buttons">
                    <button className="admin-board-button" onClick={handleProfile}>see profile</button>
                    <button className="admin-board-button" onClick={handleProducts}>see products</button>
                    {/* <button className="admin-board-button">see users</button> */}
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default BoardAdmin;
