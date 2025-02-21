import { setupCache } from "axios-cache-interceptor";
import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});

const cachedAxios = setupCache(instance);

export default cachedAxios;