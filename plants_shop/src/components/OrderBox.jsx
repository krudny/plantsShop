import React from 'react';
import "../styles/orders.css"

export default function OrderBox({ order }) {
    const calculateTotalPrice = () => {
        return order.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    return (
        <div key={order.orderID} className='order-card'>
            <h3>Order ID: {order.orderID}</h3>
            <p>Order Date: {new Date(order.orderDate).toLocaleString()}</p>
            <p> Total price: {calculateTotalPrice()} zł </p>
            <h3>Products:</h3>
            <ul>
                {order.products.map((product) => (
                    <li key={product.name}>
                        <hr />
                        <p>Product ID: {product.name}</p>
                        <p>Price: {product.price} zł</p>
                        <p>Quantity: {product.quantity}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}