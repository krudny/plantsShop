import { Route, Routes } from "react-router-dom";
import Main from "../src/pages/Main";
import Shop from "../src/pages/Shop";
import ProductPage from "../src/pages/ProductPage";
import Cart from "../src/components/Cart";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Profile from "../src/pages/Profile";
import BoardAdmin from "../src/pages/BoardAdmin";
import AdminProducts from "./components/AdminProducts";
import UpdateProductPage from "./pages/UpdateProduct";
import AddProductPage from "./pages/AddProduct";
import {useEffect} from "react";
import UserService from "./services/UserService.jsx";

export default function App() {
  // tests if server is up
  useEffect(() => {
    UserService.getPublicContent();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productpage/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<BoardAdmin />} />
        <Route path="/adminproducts" element={<AdminProducts />} />
        <Route
          path="/updateproduct/:productId"
          element={<UpdateProductPage />}
        />
        <Route path="/addproduct" element={<AddProductPage />} />
      </Routes>
    </>
  );
}
