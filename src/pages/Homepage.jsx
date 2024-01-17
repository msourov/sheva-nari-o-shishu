import axios from "axios";
import api from "../action/api";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Hero/Hero";
import Program from "../components/programs/Program";
import { useEffect, useState, createContext } from "react";
import FoundationFacts from "../components/FoundationFacts";
import Foundation from "../components/Foundation";
import Partner from "../components/Partner";

export const HomepageContext = createContext();

function HomePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
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
      const response = await fetchData();
      setItems(response || []);
    };

    fetchDataAsync();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  // console.log("items inside homepage", items);
  return (
    <>
      {/* {console.log("response.image", response.data.data[0].image.url)}
      <img src={response.data.data[0].image.url} /> */}
      {/* <Navbar /> */}
      <HomepageContext.Provider value={items}>
        <Hero />
        <Program />
        <FoundationFacts />
        <Foundation />
        <Partner />
      </HomepageContext.Provider>
    </>
  );
}

export default HomePage;
