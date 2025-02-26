import { useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import "../styles/product-page.css";
import { useEffect, useState } from "react";
import AddedToCart from "../components/AddedToCart";
import { resetScroll } from "../utils/resetScroll.jsx";
import LoadingOverlay from "../components/LoadingOverlay.jsx";
import ProductService from "../services/ProductService.jsx";
import authService from "../services/AuthService.jsx";
import toast from "react-hot-toast";
import {useCart} from "../components/CartContext.jsx";

async function loadProduct(id) {
  return await ProductService.getProductById(id);
}

export default function ProductPage() {
  resetScroll();
  let { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProduct(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) =>
        console.error("Błąd podczas pobierania produktu:", error),
      )
      .finally(() => setLoading(false));
  }, [id]);

  const handleAddToCart = () => {
    if (!authService.getCurrentUser()) {
      navigate("/login");
      toast.error("You have to login first!");
      return;
    }

    addToCart(product);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 10000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  if (loading) {
    return <LoadingOverlay externalLoading={loading} />;
  }

  return (
    <>
      <div className="container">
        <Nav />
        <div className="wrapper">
          <div className="product--page--img">
            <img src={`../${product.image}`} />
          </div>
          <div className="product--page--info ">
            <p className="product--page--name">{product.name}</p>
            <p className="product--page--price">{product.price} zł</p>
            <p className="product--page--description">{product.description}</p>
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
