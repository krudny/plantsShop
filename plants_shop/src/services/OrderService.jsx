import axios from "axios";
import { Navigate } from "react-router-dom";

import AuthService from "../services/AuthService";

const API_URL = "https://dot-plants-shop-456351161172.us-central1.run.app/api/orders/";

class OrderService {
    saveOrder(items) {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser) {
            return <Navigate to="/" />
        }

        const userID = currentUser.id;
        const orderItemRequests = items.map(({ id, quantity }) => ({ productID: id, quantity }));
        return axios
            .post(API_URL + "create", {
                userID,
                orderItemRequests
            })
    }

    getCurrentUsersOrders() {
        const currentUser = AuthService.getCurrentUser();
        return axios.get(API_URL + "user/" + currentUser.id).then(response => {
            return response.data;
        }).catch(error => {
            console.error("Error fetching user orders:", error);
        });
    }

}

export default OrderService;