import { useState, useEffect, useContext } from "react";
import { HomepageContext } from "../../pages/Homepage";
import "./hero.css";

function Hero() {
  const itemsFromContext = useContext(HomepageContext);
  // console.log(itemsFromContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(itemsFromContext.hero);
  }, []);

  if (!items) {
    return <p>Loading...</p>;
  }

  const { title, description, image } = items[0] || [];
  // console.log("title", title);
  return (
    <div className="h-400 border-2 border-gray-300 overflow-hidden">
      <h1 className="text-center text-orange-500 text-3xl my-8">{title}</h1>
      <p className="text-center mb-10">{description}</p>
      {image && (
        <img
          src={`http://192.168.60.35:1336${image.url}`}
          className="hero-img"
          style={{
            width: "450px",
            height: "250px",
            border: "none",
            marginBottom: "2em",
          }}
        />
      )}
    </div>
  );
}

export default Hero;
