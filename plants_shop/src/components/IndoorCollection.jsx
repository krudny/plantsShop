import "../styles/indoor-collection.css"
import IndoorCollectionCard from "./IndoorCollectionCard"
import data from "../data/indoorCollection"

export default function indoorCollection() {
    const cardWidths = ["700px", "400px", "400px", "700px"];

    const cards = data.map((item) => {
        return (
            <IndoorCollectionCard key={item.id} item={item} width={cardWidths[item.id - 1]} />
        )
    })

    return (
        <div className="indoor-section--wrapper">
            <p>Indoor Collection</p>
            <div className="indoor-section-cards">
                {cards}
            </div>
        </div>
    )
}