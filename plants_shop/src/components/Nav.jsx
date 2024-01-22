import "../styles/nav.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useCart } from "../components/CartContext"
import AuthService from '../services/AuthService';


export default function Nav() {
    const { cartItems } = useCart();
    const [userLink, setUserLink] = useState("/login");

    useEffect(() => {
        setUserLink(AuthService.getCurrentUser() ? "/profile" : "/login");
    }, [AuthService.getCurrentUser()]);

    return (
        <>
            <nav>
                <div className="nav--logo">
                    .Plants
                </div>
                <div className="nav--links">
                    <Link to="/"><p className="links">Home</p></Link>
                    <Link to="/shop"><p className="links">Shop</p></Link>
                    <Link to="/contact"><p className="links">Contact us</p></Link>
                </div>
                <div className="nav--icons">
                    <Link to="/cart"><span className="material-symbols-outlined">shopping_cart</span></Link>
                    <Link to={userLink}><span className="material-symbols-outlined">person</span></Link>
                </div>
            </nav>
        </>
    )
}