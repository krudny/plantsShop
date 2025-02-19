import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../components/LoadingOverlay.jsx";

import AuthService from "../services/AuthService";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/contact.css";
import "../styles/admin-board.css";

const BoardAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (
      !currentUser ||
      !currentUser.roles ||
      !currentUser.roles.includes("ROLE_ADMIN")
    ) {
      navigate("/");
    }
  }, [navigate]);

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleProducts = () => {
    navigate("/adminproducts");
  };

  return (
    <>
      <LoadingOverlay />
      <div className="admin-board-container">
        <Nav />
        <div className="admin-board-wrapper">
          <h1>Welcome to admin board!</h1>
          <div className="admin-board-buttons">
            <button className="admin-board-button" onClick={handleProfile}>
              see profile
            </button>
            <button className="admin-board-button" onClick={handleProducts}>
              see products
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BoardAdmin;
