import "../styles/cart.css"
import {useCart} from "../components/CartContext.jsx"
import data from "../data/products.js"

export default function CartItem(props){
    const { removeFromCart } = useCart();
    const product = data.find(p => p.id === props.item.id);

    return (
        <div className="product">
            <img className="cart--img" src={`../src/assets/${props.item.img}`}></img>
            <div className="info--wrapper">
                <p className="cart--name">{props.item.name}</p>
                <p className="cart--description">{props.item.description}</p>
                <p className="cart--price">{props.item.price}</p>
                <div className="buttons--wrapper">
                    <select className="select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <span className="material-symbols-outlined close--btn" onClick={() => removeFromCart(props.item.id)} >close</span>
                </div>
                
            </div>
            
        </div>
    )
}