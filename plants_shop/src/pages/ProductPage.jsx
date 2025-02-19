import { useParams } from "react-router-dom";
import data from "../data/products";
import Nav from "../components/Nav";
import "../styles/product-page.css";
import { useState } from "react";
import { useCart } from "../components/CartContext";
import AddedToCart from "../components/AddedToCart";
import { resetScroll } from "../utils/resetScroll.jsx";
import LoadingOverlay from "../components/LoadingOverlay.jsx";

export default function ProductPage() {
  resetScroll();
  let { name } = useParams();
  const product = data.find((p) => p.name === name);
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 10000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <LoadingOverlay />
      <div className="container">
        <Nav />
        <div className="wrapper">
          <div className="product--page--img">
            <img src={`../${product.img}`} />
          </div>
          <div className="product--page--info ">
            <p className="product--page--name">{product.name}</p>
            <p className="product--page--price">{product.price}</p>
            <p className="product--page--description">
              {product.longDescription}
            </p>
            <button className="add--cart" onClick={handleAddToCart}>
              Add to cart
            </button>
            {showPopup && (
              <AddedToCart closePopup={closePopup} isActive={showPopup} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
