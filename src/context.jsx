import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"http://192.168.60.35:1336/api/landing-pages"
			);
			if (response.status === 200) {
				setData(response.data);
			}
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<AppContext.Provider value={{ data, loading, error }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
