import { useContext } from "react";
import { Card, Row } from "antd";
import { HomepageContext } from "../pages/Homepage";
import { motion } from "framer-motion";

const Partner = () => {
  const { partner } = useContext(HomepageContext);

  return (
    partner && (
      <div style={{ overflow: "hidden", backgroundColor: "black" }}>
        <h1 className="text-center text-orange-500 text-3xl pt-12 pb-8 font-medium">
          {partner[0].title}
        </h1>
        {/* <hr /> */}
        <Row
          gutter={16}
          justify="center"
          align="middle"
          style={{ marginBottom: "2em", padding: "1em" }}
        >
          {partner?.slice(1, partner.length)?.map((item) => (
            // <motion.div
            //   key={item.id}
            //   initial={{ x: "-100vw" }}
            //   animate={{ x: 0 }}
            //   transition={{ duration: 1, ease: "easeInOut" }}
            //   style={{
            //     display: "inline-block",
            //     borderRadius: "10px",
            //     overflow: "hidden",
            //   }}
            //   className="shadow-md hover:shadow-lg"
            // >
            <div className="shadow-md hover:shadow-lg m-4">
              <Card
                style={{
                  width: "300px",
                  background: "",
                  padding: "20px",
                }}
              >
                <img
                  style={{ width: "100%", height: "150px" }}
                  src={`https:api.shevabd.org${item.image.url}`}
                  alt={"partners"}
                />
                {/* <p className="font-medium text-center">{item.about}</p> */}
              </Card>
            </div>
          ))}
        </Row>
      </div>
    )
  );
};

export default Partner;
