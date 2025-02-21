import "../styles/cart.css";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext.jsx";
import Footer from "./Footer.jsx";
import Nav from "./Nav.jsx";
import CartItem from "./CartItem.jsx";
import OrderService from "../services/OrderService.jsx";
import { resetScroll } from "../utils/resetScroll.jsx";

export default function Cart() {
  const { cartItems, calculateTotal, reset } = useCart();
  const orderService = new OrderService();

  const items = cartItems.map((item) => {
    return <CartItem key={item.product_id} item={item} />;
  });

  return (
    <>
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
                <Link to="/">
                  <button
                    className="add--cart"
                    onClick={() => {
                      orderService.saveOrder(cartItems);
                      reset();
                      resetScroll();
                    }}
                  >
                    Finish order!
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <p>Your cart is empty :c</p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
