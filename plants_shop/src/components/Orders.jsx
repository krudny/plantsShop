import { useState, useEffect } from "react";
import "../styles/orders.css";
import OrderBox from "./OrderBox";
import OrderService from "../services/OrderService";
import LoadingOverlay from "./LoadingOverlay.jsx";
import Pagination from "./Pagination.jsx";
import { resetScroll } from "../utils/resetScroll.jsx";
import userService from "../services/UserService.jsx";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthService.jsx";
import toast from "react-hot-toast";

export default function Orders({ user }) {
  resetScroll();
  const orderService = new OrderService();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const ordersPerPage = 2;

  useEffect(() => {
    setIsLoading(true);
    orderService
      .getCurrentUsersOrders(currentPage, ordersPerPage)
      .then((data) => {
        setOrders(data.content);
        setTotalPages(data.page.totalPages);
      })
      .catch((error) => console.error("Error fetching user orders:", error))
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  const logout = () => {
    authService.logout();
    navigate("/");
    toast.success("Successfully logged out!");
  };

  return (
    <div className="orders--container">
      <LoadingOverlay externalLoading={isLoading} />

      <p>Hi {user.username}! Here are your orders!</p>

      <button className="add--cart logout--btn" onClick={logout}>
        Logout
      </button>

      {orders.map((order) => (
        <OrderBox key={order.orderID} order={order} />
      ))}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
