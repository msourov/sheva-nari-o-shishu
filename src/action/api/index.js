import axios from "axios";

export default (token = false) => {
	return axios.create({
		baseURL: "http://192.168.60.35:1336/api/",
		headers: {
			"content-type": "application/json",
			// authorization: `Bearer ${token}`,
		},
	});
};
