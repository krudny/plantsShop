import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

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
        // Navigate to "/"
        navigate("/");
    };

    if (redirect) {
        return <Navigate to={redirect} />;
    }

    return (
        <div className="container">
            {userReady ? (
                <div>
                    <p>
                        <strong>Token:</strong>{" "}
                        {currentUser.token.substring(0, 20)} ...{" "}
                        {currentUser.token.substr(currentUser.token.length - 20)}
                    </p>
                    <p>
                        <strong>Id:</strong> {currentUser.id}
                    </p>
                    <p>
                        <strong>Email:</strong> {currentUser.email}
                    </p>
                    <strong>Authorities:</strong>
                    <ul>
                        {currentUser.roles &&
                            currentUser.roles.map((role, index) => (
                                <li key={index}>{role}</li>
                            ))}
                    </ul>
                    <a href="/"> HOME </a>
                    <button onClick={handleButton}>Log out</button>
                </div>
            ) : null}
        </div>
    );
};

export default Profile;
