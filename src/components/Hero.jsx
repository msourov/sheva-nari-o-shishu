import { useState, useEffect, useContext } from "react";
import { HomepageContext } from "../pages/Homepage";
import { motion } from "framer-motion";

function Hero() {
  const itemsFromContext = useContext(HomepageContext);
  // console.log(itemsFromContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsFromContext.hero);
  }, []);

  if (!items.length) {
    // Check for empty array
    return <p>Loading Hero Content...</p>; // More informative message
  }

  const { title, description, image } = items[0] || {}; // Check for empty array
  const descriptionText = description.split(" ");
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: true }}
      className="py-8 md:py-32 border-2 border-gray-300 overflow-hidden bg-cover bg-center outline-red-700"
      style={{
        backgroundImage: `url(https://api.shevabd.org${image?.url})`,
        // overflow: "scroll",
      }} // Optional chaining for image.url
    >
      <h1 className="text-left ml-8 md:ml-0 text-orange-500 text-3xl md:text-5xl  px-8">
        {title}
      </h1>
      {/* <p className=" text-white text-left md:text-center md:w-2/5 mt-8 md:mt-16 text-lg md:text-xl"> */}
      <p className=" text-white lg:text-left md:w-3/5 mt-6 md:mt-16 text-lg md:text-xl px-8">
        {descriptionText.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}

export default Hero;
