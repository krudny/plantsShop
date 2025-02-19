import "../styles/cart.css";
import { useCart } from "./CartContext.jsx";

export default function CartItem(props) {
  console.log(props);
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="product">
      <img className="cart--img" src={`${props.item.image}`}></img>
      <div className="info--wrapper">
        <div className="info">
          <p className="cart--name">{props.item.name}</p>
          <p className="cart--description">{props.item.description}</p>
        </div>
        <div className="info--price">
          <p className="cart--price">{props.item.price}</p>
          <p className="quantity">Quantity: {props.item.quantity}</p>
        </div>

        <div className="buttons--wrapper">
          <span
            className="material-symbols-outlined cart--btn"
            onClick={() => increaseQuantity(props.item.id)}
          >
            add
          </span>
          <span
            className="material-symbols-outlined cart--btn"
            onClick={() => decreaseQuantity(props.item.id)}
          >
            remove
          </span>
          <span
            className="material-symbols-outlined cart--btn"
            onClick={() => removeFromCart(props.item.id)}
          >
            close
          </span>
        </div>
      </div>
    </div>
  );
}
