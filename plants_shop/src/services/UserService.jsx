import authHeader from "./authHeader";
import cachedAxios from "../utils/axiosConfig.jsx";

const API_ENDPOINT = "test";

class UserService {
  getPublicContent() {
    return cachedAxios.get(`${API_ENDPOINT}/all`);
  }

  getUserBoard() {
    return cachedAxios.get(`${API_ENDPOINT}/user`, { headers: authHeader() });
  }

  getAdminBoard() {
    return cachedAxios.get(`${API_ENDPOINT}/admin`, { headers: authHeader() });
  }
}

export default new UserService();
