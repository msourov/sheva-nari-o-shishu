import axios from "axios";
import api from "../action/apis";
import FoundationFacts from "../components/FoundationFacts";
import Foundation from "../components/FoundationFacts";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/Hero/Hero";
import Program from "../components/programs/Program";
import { useEffect, useState, createContext } from "react";

export const homepageContext = createContext();

const fetchData = async () => {
  try {
    const response = await api.get("landing-pages");
    // const data = await response.json();
    // console.log(response?.data?.data[0]);
    return response?.data?.data[0] || [];
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

function HomePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData()
      .then((data) => setItems(data))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  console.log("items inside homepage", items);
  return (
    <>
      {/* <Navbar /> */}
      <homepageContext.Provider value={items}>
        <Hero />
        {/* <Program /> */}
        {/* <FoundationFacts /> */}
      </homepageContext.Provider>
    </>
  );
}

export default HomePage;
