import "../styles/new-plants.css"

export default function NewPlantCard(props) {
    return (
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
                <div className="plant--arrow">
                    <span className="material-symbols-outlined">arrow_forward</span>
                </div>
            </div>
            
        </div>
    )
}