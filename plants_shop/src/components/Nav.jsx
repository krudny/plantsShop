import "../styles/nav.css"
import { Link } from "react-router-dom"
import { useCart } from "../components/CartContext"


export default function Nav() {
    const { cartItems } = useCart();

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
                <span className="material-symbols-outlined">person</span>
            </div>
        </nav>
        </>
    )
}