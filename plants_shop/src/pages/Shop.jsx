import Nav from "../components/Nav"
import Products from "../components/Products"
import Footer from "../components/Footer"
import {resetScroll} from "../utils/resetScroll.jsx";

export default function Shop(){
    resetScroll();

    return (
        <>
            <Nav />
            <Products />
            <Footer />
        </>
    )
}