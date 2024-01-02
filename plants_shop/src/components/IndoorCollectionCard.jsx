import "../styles/indoor-collection.css"

export default function IndoorCollectionCard(props) {
    return (
        <div className="indoor--card--wrapper" style={{ width: props.width }}>
            <img src={`../src/assets/${props.item.img}`} className="indoor--img" />
            {/* <div className="indoor--arrow">
                <span className="material-symbols-outlined">arrow_forward</span>
            </div> */}
            <p className="indoor--name">{props.item.name}</p>
        </div>
    )
}