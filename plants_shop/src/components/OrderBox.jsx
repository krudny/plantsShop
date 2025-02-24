import "../styles/orders.css";
import {calculateTotalPrice, parseDate} from "../utils/cartUtils.jsx";

export default function OrderBox({ order }) {
    return (
        <div className="order--box">
            <div className="order--header">
                <div className="order--info">
                    <p>Order placed</p>
                    <div className="order--info--details">{parseDate(order.orderDate)}</div>
                </div>
                <div className="order--info">
                    <p>Total price</p>
                    <div className="order--info--details">{calculateTotalPrice(order)} zł</div>
                </div>
                <div className="order--info">
                    <p>Order ID</p>
                    <div className="order--info--details">{order.orderID}</div>
                </div>
            </div>
            {order.items.map((item) => (
                <div key={item.product.productID} className="order--content">
                    <div className="order--img">
                        <img src={item.product.image} alt={item.product.name} />
                    </div>
                    <div className="order--details">
                        <div className="order--title">
                            {item.product.name} - {item.product.description}
                        </div>
                        <div className="order--description">
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: {item.product.price} zł</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
