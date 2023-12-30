import Main from "../src/pages/Main"
import Shop from "../src/pages/Shop"
import ProductPage from "../src/pages/ProductPage"
import { Route, Routes, Link } from "react-router-dom"


export default function App() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/productpage/:name" element={<ProductPage />} />
            </Routes>
        </>
    ) 
}