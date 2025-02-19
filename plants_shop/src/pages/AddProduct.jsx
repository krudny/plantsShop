import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import AuthService from "../services/AuthService";
import LoadingOverlay from "../components/LoadingOverlay.jsx";
import ProductService from "../services/ProductService";
import "../styles/contact.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const AddProductPage = () => {
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

  const handleUpdate = async (updatedProduct) => {
    try {
      delete updatedProduct.product_id;
      await ProductService.addProduct(updatedProduct);
      navigate("/adminproducts");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      <LoadingOverlay />
      <div className="contact--container">
        <img className="img1" src="../../src/assets/contact2.png" />
        <img className="img2" src="../../src/assets/contact2.png" />
        <Nav />
        <div className="contact--wrapper">
          <div className="contact-text">
            <p className="contact-1">Add Product</p>
          </div>
          {<ProductForm product={{}} onSubmit={handleUpdate} />}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AddProductPage;
