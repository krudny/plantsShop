import "../styles/cart.css"
import {useCart} from "../components/CartContext.jsx"
import data from "../data/products.js"

export default function CartItem(props){
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <div className="product">
            <img className="cart--img" src={`../src/assets/${props.item.img}`}></img>
            <div className="info--wrapper">
                <p className="cart--name">{props.item.name}</p>
                <p className="cart--description">{props.item.description}</p>
                <p className="cart--price">{props.item.price}</p>
                <div className="buttons--wrapper">
                    <p className="quantity">Quantity: {props.item.quantity}</p>
                    <span className="material-symbols-outlined cart--btn" onClick={() => increaseQuantity(props.item.id)}>add</span>
                    <span className="material-symbols-outlined cart--btn" onClick={() => decreaseQuantity(props.item.id)}>remove</span>
                    <span className="material-symbols-outlined cart--btn" onClick={() => removeFromCart(props.item.id)} >close</span>
                </div>
            </div>
        </div>
    )
}