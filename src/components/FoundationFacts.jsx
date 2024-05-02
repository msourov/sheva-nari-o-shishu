import { useContext, useEffect } from "react";
import { Card, Col, Row } from "antd";
import { HomepageContext } from "../pages/Homepage";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// const cardStyle = {
//   width: "100%",
//   height: "100%",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
// };

const cardStyle = {
  // width: "300px",
  // height: "120px",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
};

const FoundationFacts = () => {
  const { fact } = useContext(HomepageContext);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  console.log(fact);
  const facts = fact && fact.slice(1);
  // useEffect(() => {
  //   const animation = animate(facts)
  // })
  return (
    <>
      {/* <h1 className="text-center text-orange-500 text-3xl py-12 font-medium">
        {fact[0].title}
      </h1> */}
      {/* <hr className="mb-8" /> */}
      {fact && (
        <div
          style={{
            overflow: "hidden",
            backgroundImage: `url("banner-new.png")`,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("banner-new.png")`,
            backgroundPosition: "50% 0",
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 0, 0, 0.15)",
            // opacity: 0.5,
          }}
        >
          <Row
            gutter={16}
            justify="center"
            align="middle"
            style={{ marginBlock: "2em", paddingBlock: "5em" }}
          >
            {fact.slice(1, fact.length).map((item, index) => (
              <Col
                key={index}
                style={{ margin: "0.5em 1em" }}
                className="w-[250px] md:w-[300px] lg:w-[350px] h-48"
                xs={{
                  flex: "100%",
                }}
                sm={{
                  flex: "50%",
                }}
                md={{
                  flex: "40%",
                }}
                lg={{
                  flex: "20%",
                }}
                xl={{
                  flex: "10%",
                }}
              >
                <div className="w-70 border shadow-white border-stone-50 py-8 text-white text-lg shadow-md flex justify-center flex-col">
                  <motion.div className="text-center py-2 font-serif text-xl outline mt-[-10]">
                    {item?.data}
                  </motion.div>
                  <hr />
                  <div className="text-center py-2">{item.description}</div>
                </div>
                {/* <Card title={item.data} bordered={false} style={cardStyle}>
            					{item.description}
            				</Card> */}
              </Col>
              // <Col
              //   key={index}
              //   style={{ margin: "0.5em 1em" }}
              //   className="w-[250px] md:w-[300px] lg:w-[350px] h-48 flex flex-col items-center justify-center"
              // >
              //   <div className="w-full h-full  border shadow-white border-stone-50 text-white text-lg shadow-md overflow-hidden">
              //     {" "}
              //     <motion.div className="text-center py-2 font-serif text-xl">
              //       {item?.data}
              //     </motion.div>
              //     <hr />
              //     <div className="text-center py-2">{item.description}</div>
              //   </div>
              // </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default FoundationFacts;
