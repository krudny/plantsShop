import "../styles/cart.css"
import {useCart} from "../components/CartContext.jsx"
import Footer from "./Footer.jsx";
import Nav from "./Nav.jsx";
import CartItem from "./CartItem.jsx";


export default function Cart(){
    const { cartItems, calculateTotal } = useCart();

    const items = cartItems.map((item) => {
        return (
          <CartItem key={item.id} item={item} />
        )
    })


    return (
        <div className="cart--container">
            <Nav />
            <div className="items--wrapper">
                {cartItems.length > 0 ? (
                    <>
                        <p>Here are your precisely chosen plants!</p>
                        <div className="product--wrapper">
                            {items}
                        </div>
                        <div className="cart--total">
                            <p>Total Amount: {calculateTotal().toFixed(2)} zł</p>
                            <button className="add--cart">Finish order!</button>
                        </div>
                    </>) : (
                        <p>Your cart is empty :c</p> )
                }
            </div>
            <Footer />
        </div>  
    );
}