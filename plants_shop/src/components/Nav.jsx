import "../styles/header.css"

export default function Nav() {
    return (
        <nav>
            <div className="nav--logo">
                .Plants
            </div>
            <div className="nav--links">
                <p>Home</p>
                <p>Shop</p>
                <p>About us</p>
                <p>Contact us</p>
            </div>
            <div className="nav--icons">
                <span class="material-symbols-outlined">person</span>
            </div>
        </nav>
    )
}