import axios from "axios";
import { Navigate } from "react-router-dom";

import AuthService from "../services/AuthService";

const API_URL = "http://localhost:8080/api/orders/";

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

}

export default OrderService;