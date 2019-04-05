import axios from "axios";
import { getToken } from "./auth";

const apiClient = axios.create({
  baseURL: "https://karry-dev.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Access-Control-Expose-Headers": "x-auth",
    "x-auth": getToken()
  }
});

export default apiClient;
