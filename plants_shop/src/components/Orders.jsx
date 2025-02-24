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
    const [currentPage, setCurrentPage] = useState(0);
    const ordersPerPage = 2;
    const totalPages = Math.ceil(orders.length / ordersPerPage);

    useEffect(() => {
        setIsLoading(true);
        orderService
            .getCurrentUsersOrders()
            .then((data) => setOrders(data))
            .catch((error) => console.error("Error fetching user orders:", error))
            .finally(() => setIsLoading(false));
    }, []);

    const displayedOrders = orders.slice(
        currentPage * ordersPerPage,
        (currentPage + 1) * ordersPerPage
    );

    return (
        <div className="orders--container">
            <LoadingOverlay externalLoading={isLoading} />
            <p>Hi {user.username}! Here are your orders!</p>
            {displayedOrders.map((order) => (
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
