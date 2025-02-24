import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/vehicleData",
  timeout: 10000, //10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors for auth or error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
