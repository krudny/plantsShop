import React from "react";
import { useNavigate } from "react-router-dom";

import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../styles/contact.css"
import "../styles/admin-board.css"

const BoardAdmin = () => {
    const navigate = useNavigate();

    const handleProfile = () => {
        navigate("/profile");
    }

    const handleProducts = () => {
        navigate("/adminproducts")
    }

    return (
        <div className="admin-board-container">
            <Nav />
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
