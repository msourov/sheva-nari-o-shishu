import { useContext } from "react";
import { homepageContext } from "../pages/Homepage";
import { Card, Col, Row } from "antd";

const FoundationFacts = () => {
  const { Foundation_Fact } = useContext(homepageContext);
  console.log(Foundation_Fact);
  return (
    <div>
      <h2 className="text-orange-500 mt-5 ml-5 text-l font-semibold">
        Foundation Facts
      </h2>
      <Row gutter={16} justify="center" align="middle">
        <Col
          xs={24} // Full width on small screens
          sm={12} // Half width on medium screens
          md={8} // One-third width on large screens
          lg={6} // One-fourth width on extra-large screens
          xl={6} // One-fourth width on extra-large screens
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center", // Center the items horizontally
            alignItems: "center", // Center the items vertically
            margin: "auto",
          }}
        >
          {/* {Foundation_Fact.map((item) => (
            <Card title={item.amount} bordered>
              {item.about}
            </Card>
          ))} */}
        </Col>
      </Row>
    </div>
  );
};

export default FoundationFacts;
