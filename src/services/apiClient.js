import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://karry-dev.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

export default apiClient;
