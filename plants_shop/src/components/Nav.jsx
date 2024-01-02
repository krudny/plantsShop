import "../styles/nav.css"
import { Route, Routes, Link } from "react-router-dom"


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
                <p className="links">Contact us</p>
            </div>
            <div className="nav--icons">
                <Link to="/cart"><span className="material-symbols-outlined">shopping_cart</span></Link>
                <span className="material-symbols-outlined">person</span>
            </div>
        </nav>
        </>
    )
}