import { useContext } from "react";
import { Card, Divider, Row } from "antd";
import { HomepageContext } from "../pages/Homepage";
import { useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion";

const Foundation = () => {
  const { Foundation } = useContext(HomepageContext);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    Foundation && (
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <h1 className="text-center text-orange-500 text-3xl py-12 font-medium">
          {Foundation[0].title}
        </h1>
        {/* <Divider /> */}
        {/* <Row
          gutter={16}
          justify="space-evenly"
          align="middle"
          style={{ marginBottom: "1em" }}
        >
          {Foundation?.slice(1, Foundation.length)?.map((item, index) => (
            <div
              style={{
                background: "none",
                display: "flex",
                flexDirection: "column",
                // gap: "1em",
                justifyContent: "space-between",
                alignItems: "center",
                // height: "240px",
                // width: "30%",
                // outline: "auto",
                overflow: "hidden",
              }}
              key={`fd${index}`}
            >
              <img
                style={{ width: "240px", height: "180px", overflow: "hidden" }}
                src={`https://api.shevabd.org${item.image.url}`}
                alt="foundation"
              />
              <p
                className="font-bold text-center max-w-full w-2/5 bg-white h-46 flex-1"
                style={{ alignSelf: "center" }}
              >
                {item.about}
              </p>
            </div>
          ))}
        </Row> */}
        <Row
          gutter={16}
          justify="space-evenly"
          align="middle"
          style={{ marginBottom: "1em" }}
          className="p-8 rounded-lg"
        >
          {Foundation?.slice(1, Foundation.length)?.map((item, index) => (
            <div
              className="flex flex-col justify-between items-center bg-yellow-50 p-6 rounded-lg shadow-lg mb-8 mx-4"
              key={`fd${index}`}
              style={{ minWidth: "300px" }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring, stiffness: 400 damping: 50" }}
              >
                <img
                  className="w-48 h-48 object-cover rounded-full mb-6 cursor-pointer"
                  src={`https://api.shevabd.org${item.image.url}`}
                  alt="foundation"
                />
              </motion.div>

              <p className="font-bold text-gray-800 text-center max-w-full w-2/3 text-lg">
                {item.about}
              </p>
            </div>
          ))}
        </Row>
      </div>
    )
  );
};

export default Foundation;
