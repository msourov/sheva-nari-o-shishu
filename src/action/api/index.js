import axios from "axios";

export default (token = false) => {
  return axios.create({
    baseURL: "https://api.shevabd.org/api/",
    headers: {
      "content-type": "application/json",
      // authorization: `Bearer ${token}`,
    },
  });
};
