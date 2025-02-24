import  { useState, useEffect } from "react";
import "../styles/orders.css";
import OrderBox from "./OrderBox";
import OrderService from "../services/OrderService";
import LoadingOverlay from "./LoadingOverlay.jsx";
import Pagination from "./Pagination.jsx";

export default function Orders({ user }) {
  const orderService = new OrderService();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
      setIsLoading(true);
    orderService
      .getCurrentUsersOrders(currentPage, 2)
      .then((data) => {
          setOrders(data);
          setTotalPages(data.totalPages);
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
          <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />/
      </div>
  );
}
