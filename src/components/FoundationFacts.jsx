import { useContext } from "react";
import { HomepageContext } from "../pages/Homepage";
import { Card, Col, Row } from "antd";

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
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "center",
};

const FoundationFacts = () => {
  const { fact } = useContext(HomepageContext);
  console.log("facts", fact);
  return (
    <div>
      <h1 className="text-center text-orange-500 text-3xl my-8">
        {fact[0].title}
      </h1>
      {/* <Row gutter={16} justify="center" align="middle">
        <Col
          span={8}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          {fact.slice(1, fact.length).map((item, index) => (
            <Card
              key={index}
              title={item.data}
              bordered={false}
              style={cardStyle}
            >
              {item.description}
            </Card>
          ))}
        </Col>
      </Row> */}
      <Row
        gutter={16}
        justify="center"
        align="middle"
        style={{ marginBlock: "2em" }}
      >
        {fact.slice(1, fact.length).map((item, index) => (
          <Col key={index} span={6} style={{ margin: "0.5em 1em" }}>
            <Card title={item.data} bordered={false} style={cardStyle}>
              {item.description}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FoundationFacts;
