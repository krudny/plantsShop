import cachedAxios from "../utils/axiosConfig.jsx";

const API_ENDPOINT = "auth";

class AuthService {
  login(username, password) {
    return cachedAxios
      .post(`${API_ENDPOINT}/signin`, {
        username,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return cachedAxios.post(`${API_ENDPOINT}/signup`, {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
