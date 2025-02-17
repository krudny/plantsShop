import Nav from "../components/Nav"
import "../styles/hero.css"

export default function Hero() {
    return (
        <header>
        <span className="white">
            <Nav/>
        </span>

        <div className="background--image"></div>
        <div className="header--wrapper">
            <div className="header--intro">
                GET LOST <br/> IN NATURE
            </div>
            <div className="header--subintro">
                &#34;In every walk with nature, one receives far more than he seeks.
                The trees whisper ancient tales, the rivers hum eternal songs, and the mountains stand as guardians
                of time.
                Here, amidst the grandeur of the wild, we find our truest selves.&#34;
            </div>
        </div>
        </header>
    )
}