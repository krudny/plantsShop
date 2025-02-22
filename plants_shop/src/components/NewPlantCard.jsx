import "../styles/new-plants.css";
import { Link } from "react-router-dom";

export default function NewPlantCard(props) {
  console.log(props);
  return (
    <Link to={`/ProductPage/${props.item.id}`}>
      <div className="card--wrapper">
        <div className="plant--img">
          <img src={`${props.item.img}`} />
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
  );
}
