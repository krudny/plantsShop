import "../styles/new-plants.css"
import { Link } from "react-router-dom"

export default function NewPlantCard(props) {
    return (
        <Link to={`/ProductPage/${props.item.name}`}>
            <div className="card--wrapper">
                <div className="plant--img">
                    <img src={`../src/assets/${props.item.img}`} />
                </div>
                <div className="plant--section">
                    <div className="plant--info">
                        <p className="plant--name">{props.item.name}</p>
                        <p className="plant--description">{props.item.description}</p>
                        <p className="plant--price">{props.item.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}