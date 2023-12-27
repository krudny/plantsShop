import "../styles/nav.css"

export default function Nav() {
    return (
        <nav>
            <div className="nav--logo">
                .Plants
            </div>
            <div className="nav--links">
                <p>Home</p>
                <p>Shop</p>
                <p>Discover</p>
                <p>Contact us</p>
            </div>
            <div className="nav--icons">
                <span class="material-symbols-outlined">shopping_cart</span>
                <span className="material-symbols-outlined">person</span>
            </div>
        </nav>
    )
}