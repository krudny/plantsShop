import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/profile.css";
import Orders from "../components/Orders.jsx";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
      navigate("/");
    }
    setCurrentUser(currentUser);
  }, []);


  return (
    <>
      <div className="profile">
        <Nav />
        <Orders user={currentUser} />
        <Footer />
      </div>
    </>
  );
};

export default Profile;
