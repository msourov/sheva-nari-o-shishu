import api from "../action/api";
import FoundationFacts from "../components/FoundationFacts";
import Foundation from "../components/Foundation";
import Partner from "../components/Partner";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
import Program from "../components/programs/Program";
import { useEffect, useState, createContext } from "react";

export const HomepageContext = createContext();

const Homepage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api().get("landing-pages");
      console.log("response", response);
      return response?.data?.data[0] || [];
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await fetchData();
        setItems(response || []);
      } catch (error) {
        console.error("Error in useEffect: ", error);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div style={{ outline: "auto" }}>
      <HomepageContext.Provider value={items}>
        <Hero />
        <Program />
        <FoundationFacts />
        <Foundation />
        <Partner />
      </HomepageContext.Provider>
    </div>
  );
};

export default Homepage;
