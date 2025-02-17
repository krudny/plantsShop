import "../styles/indoor-collection.css"

export default function IndoorCollectionCard(props) {
    return (
        <div className="indoor--card--wrapper" >
            <img src={`../src/assets/${props.item.img}`} className="indoor--img" />
            <p className="indoor--name">{props.item.name}</p>
        </div>
    )
}