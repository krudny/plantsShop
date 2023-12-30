import "../styles/indoor-collection.css"

export default function IndoorCollectionCard(props) {
    return (
        <div className="indoor--card--wrapper" style={{ width: props.width }}>
            <img src={`../src/assets/${props.item.img}`} className="indoor--img" />
            <p>{props.item.name}</p>
        </div>
    )
}