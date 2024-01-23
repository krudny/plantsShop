import React from 'react';

export default function OrderBox({ order }) {
    return (
        <div key={order.orderID}>
            <h3>Order ID: {order.orderID}</h3>
            <p>Order Date: {new Date(order.orderDate).toLocaleString()}</p>
            <h4>Products:</h4>
            <ul>
                {order.products.map((product) => (
                    <li key={product.productID}>
                        <p>Product ID: {product.productID}</p>
                        <p>Price: {product.price} zł</p>
                        <p>Quantity: {product.quantity}</p>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    )
}