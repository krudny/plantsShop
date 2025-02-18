import { useParams } from 'react-router-dom';
import data from '../data/products'
import Nav from '../components/Nav';
import "../styles/product-page.css"
import { useState } from 'react';
import {useCart} from '../components/CartContext'
import AddedToCart from '../components/AddedToCart';

export default function ProductPage() {
    let { name } = useParams();
    const product = data.find(p => p.name === name);
    const { addToCart } = useCart();
    const [isAddedToCart, setIsAddedToCart] = useState(false);


    const handleAddToCart = () => {
        addToCart(product);
        setIsAddedToCart(true); 
        setTimeout(() => {
            setIsAddedToCart(false);
        }, 10000); 
    };

    const closePopup = () => {
      setIsAddedToCart(false);
    };


    return (
    <>

        <div className="container">
            <Nav />
            <div className="wrapper">
                <div className="product--page--img">
                  <img src={`${product.img}`} />
                </div>
                <div className="product--page--info ">
                  <p className="product--page--name">{product.name}</p>
                  <p className="product--page--price">{product.price}</p>
                  <p className="product--page--description">{product.longDescription}</p>
                  <button className="add--cart" onClick={handleAddToCart}>Add to cart</button>
                  {isAddedToCart && <AddedToCart closePopup={closePopup} isActive={isAddedToCart} />}
                </div>
            </div>
        </div>
        
    </>
    );
}
