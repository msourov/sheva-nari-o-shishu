import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.60.35:1337/api/",
  headers: {
    "Content-Type": "application/json", // Fix the header key to "Content-Type"
  },
});

export default api;
