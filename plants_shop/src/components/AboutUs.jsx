import "../styles/about-us.css"
import AboutUsCard from "./AboutUsCard"
import data from "../data/aboutUs"

export default function AboutUs() {
    const cards = data.map((item) => {
        return (
            <AboutUsCard key={item.id} item={item} />
        )
    })

    return (
        <div className="about--section--wrapper">
            <p className="about--title">About us</p>
            <p className="about--subtitle">Order now and appreciate beauty of nature</p>
            <div className="about--section--cards">
                {cards}
            </div>
        </div>
    )
}