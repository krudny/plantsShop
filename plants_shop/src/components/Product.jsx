import "../styles/products.css"
import { Link } from "react-router-dom"


export default function Product(props) {
    return (
        <Link to={`/ProductPage/${props.item.name}`}>
            <div className="product--box">
                <div className="product--img">
                    <img src={`../src/assets/${props.item.image}`} />
                </div>
                <div className="product--info">
                    <p className="product--name">{props.item.name}</p>
                    <p className="product--description">{props.item.description}</p>
                    <p className="product--price">{props.item.price}</p>
                </div>
            </div>
        </Link>
    )
}