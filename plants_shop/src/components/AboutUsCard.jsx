import "../styles/about-us.css"

export default function AboutUsCard(props) {
    return (
        <div className="about--card-wrraper">
            <div className="about--card--icon">
                <span class="material-symbols-outlined">
                    {props.item.icon}
                </span>
            </div>
            <p className="about--card--title">{props.item.name}</p>
            <p className="about--card--subtitle">{props.item.description}</p>
        </div>
    )
}