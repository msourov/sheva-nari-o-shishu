import axios from "axios";

const company_id = "7c401a26-7d09-454b-b069-5c019a60be4e"
const template_id = "1"
const api = axios.create({
  baseURL: `http://192.168.0.143:8000/margaret/enduser/all?c=${company_id}&t=${template_id}`,
  headers: {
    "Content-Type": "application/json", // Fix the header key to "Content-Type"
  },
});

export default api;
