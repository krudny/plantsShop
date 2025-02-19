import React, { useState, useEffect } from "react";
import "../styles/orders.css";
import OrderBox from "./OrderBox";
import OrderService from "../services/OrderService";

export default function Orders() {
  const orderService = new OrderService();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderService
      .getCurrentUsersOrders()
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error fetching user orders:", error));
  }, []);

  return (
    <div className="order-info-container">
      <h1>Orders</h1>
      <div className="orders-contiainer">
        {orders.map((order) => (
          <OrderBox key={order.orderID} order={order} />
        ))}
      </div>
    </div>
  );
}
