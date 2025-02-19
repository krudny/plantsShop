import "../styles/products.css";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <Link to={`/ProductPage/${props.item.product_id}`}>
      <div className="product--box">
        <div className="product--img">
          <img src={`${props.item.image}`} />
        </div>
        <div className="product--info">
          <p className="product--name">{props.item.name}</p>
          <p className="product--description">{props.item.description}</p>
          <p className="product--price">{props.item.price} zł</p>
        </div>
      </div>
    </Link>
  );
}
