import { Link } from 'react-router-dom'
import '../styles/popup.css'

export default function AddedToCart({ closePopup, isActive }){    
    return (
        <div className={`popup--overlay ${isActive ? 'popup--active' : ''}`}>
            <div className="popup--wrapper">
                <span className="material-symbols-outlined popup--close" onClick={closePopup}>close</span>
                <div className="text--wrapper">
                    <span className="material-symbols-outlined" style={{ color: 'green' }}>done</span>
                    <p>Product has been added to cart!</p>
                </div>
                <p>What to do next?</p>
                <div className='links--wrapper'>
                    <Link to="/shop"><button className="add--cart btn">Still shopping</button></Link>
                    <Link to="/cart"><button className="add--cart btn">Take me to cart</button></Link>
                </div>
            </div>
        </div>
        
    )
}