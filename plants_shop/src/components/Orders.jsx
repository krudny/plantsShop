import  { useState, useEffect } from "react";
import "../styles/orders.css";
import OrderBox from "./OrderBox";
import OrderService from "../services/OrderService";
import LoadingOverlay from "./LoadingOverlay.jsx";

export default function Orders({ user }) {
  const orderService = new OrderService();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      setIsLoading(true);
    orderService
      .getCurrentUsersOrders()
      .then((data) => {
          setOrders(data);
      })
      .catch((error) => console.error("Error fetching user orders:", error))
        .finally(() => setIsLoading(false));
  }, []);

  return (
      <div className="orders--container">
          <LoadingOverlay externalLoading={isLoading} />
          <p>Hi {user.username}! Here are your orders!</p>
          {orders.map(order => (
              <OrderBox key={order.orderID} order={order} />
          ))}
      </div>
  );
}
