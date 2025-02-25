import { Navigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import cachedAxios from "../utils/axiosConfig.jsx";

const API_ENDPOINT = "orders";

class OrderService {
  saveOrder(items) {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
      console.error("User not found!");
      return <Navigate to="/" />;
    }

    const userID = currentUser.id;
    const orderItemRequests = items.map(({ productID, quantity }) => ({
      productID: productID,
      quantity,
    }));

    return cachedAxios.post(`${API_ENDPOINT}/create`, {
      userID: userID,
      orderItemRequests: orderItemRequests,
    });
  }

  getCurrentUsersOrders(currentPage, ordersPerPage) {
    const currentUser = AuthService.getCurrentUser();
    return cachedAxios
      .get(
        `${API_ENDPOINT}/user/${currentUser.id}?page=${currentPage}&ordersPerPage=${ordersPerPage}`,
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error fetching user orders:", error);
      });
  }
}

export default OrderService;
