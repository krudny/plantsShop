import "../styles/indoor-collection.css"

export default function IndoorCollectionCard(props) {
    return (
        // `../assets/${props.item.img}`
        // backgroundImage: `url("../src/assets/${props.item.img}")`
        <div className="indoor--wrapper" style={{ width: props.width }}>
            <img src={`../src/assets/${props.item.img}`} className="indoor--img" />
            {/* <p>HelloOn</p> */}
        </div>
    )
}