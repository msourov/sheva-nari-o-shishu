import axios from "axios";

const api = axios.create({
  baseURL: "http://172.25.250.33:1338/api/",
  headers: {
    "Content-Type": "application/json", // Fix the header key to "Content-Type"
  },
});

export default api;
