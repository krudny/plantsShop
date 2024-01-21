import Main from "../src/pages/Main"
import Shop from "../src/pages/Shop"
import ProductPage from "../src/pages/ProductPage"
import Cart from "../src/components/Cart"
import Contact from "../src/pages/Contact"
import Login from "../src/pages/Login"
import Register from "../src/pages/Register"
import Profile from "../src/pages/Profile"
import BoardUser from "../src/pages/BoardUser"
import BoardAdmin from "../src/pages/BoardAdmin"
import { Route, Routes, Link } from "react-router-dom"


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/productpage/:name" element={<ProductPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/user" element={<BoardUser />} />\
                <Route path="/admin" element={<BoardAdmin />} />
            </Routes>
        </>
    )
}