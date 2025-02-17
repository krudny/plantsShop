import "../styles/about-us.css"

export default function AboutUsCard(props) {
    return (
        <div className="about--card-wrapper">
            <div className="about--card--icon">
                <span className="material-symbols-outlined">
                    {props.item.icon}
                </span>
            </div>
            <p className="about--card--title">{props.item.name}</p>
            <p className="about--card--subtitle">{props.item.description}</p>
        </div>
    )
}