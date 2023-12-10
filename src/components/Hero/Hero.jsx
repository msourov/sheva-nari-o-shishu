import api from "../../action/apis";
import { useState, useEffect, useContext } from "react";
import { homepageContext } from "../../pages/Homepage";
import './hero.css';

function Hero() {
  const items = useContext(homepageContext);
  console.log("context", items.hero);

  if (!items) {
    return <p>Loading...</p>;
  }

  const { title, description, image } = items.hero[0] || [];
  // console.log(title);
  return (
    <div className="h-400 border-2 border-gray-300 overflow-hidden">
      <h1 className="text-center text-orange-500 text-3xl mb-8">{title}</h1>
      <p className="text-center mb-20">{description}</p>
      <img src={image.name} className="hero-img"/>
    </div>
  );
}

export default Hero;
