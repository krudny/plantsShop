import "../styles/nav.css"
import { Route, Routes, Link } from "react-router-dom"
import Shop from "../pages/Shop"

export default function Nav() {
    return (
        <>
        <nav>
            <div className="nav--logo">
                .Plants
            </div>
            <div className="nav--links">
                <Link to="/"><p className="links">Home</p></Link>
                <Link to="/shop"><p className="links">Shop</p></Link>
                <p className="links">Discover</p>
                <p className="links">Contact us</p>
            </div>
            <div className="nav--icons">
                <span class="material-symbols-outlined">shopping_cart</span>
                <span className="material-symbols-outlined">person</span>
            </div>
        </nav>
        </>
    )
}