import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api/v1",
  withCredentials: false, // set true if using cookie/session auth
});

export default api;
