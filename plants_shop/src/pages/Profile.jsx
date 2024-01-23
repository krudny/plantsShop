import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import Orders from "../components/Orders";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../styles/profile.css"

const Profile = () => {
    const [redirect, setRedirect] = useState(null);
    const [userReady, setUserReady] = useState(false);
    const [currentUser, setCurrentUser] = useState({ username: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) {
            setRedirect("/");
        }

        setCurrentUser(currentUser);
        setUserReady(true);
    }, []);

    const handleButton = () => {
        AuthService.logout();
        navigate("/");
    };

    if (redirect) {
        return <Navigate to={redirect} />;
    }

    return (
        <div className="profile">
            <Nav />
            <div className="profile-container">
                {userReady ? (
                    <div className="user-info-section">
                        <h1>User information</h1>
                        <div className="user-info-inside">
                            <p>
                                <strong>Email:</strong> {currentUser.email}
                            </p>
                            <div className="authorities">
                                <strong>Authorities:</strong>
                                <ul>
                                    {currentUser.roles &&
                                        currentUser.roles.map((role, index) => (
                                            <li key={index}>{role}</li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        <button onClick={handleButton} className="log-out">Log out</button>
                    </div>
                ) : null}
                <hr />
                <Orders />
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
