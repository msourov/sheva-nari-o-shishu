import { useContext } from "react";
import { Card, Row } from "antd";
import { HomepageContext } from "../pages/Homepage";

const Foundation = () => {
  const { Foundation } = useContext(HomepageContext);
  // console.log("foundation", Foundation);
  return (
    Foundation && (
      <div>
        <h1 className="text-center text-orange-500 text-3xl my-8">
          {Foundation[0].title}
        </h1>
        <Row
          gutter={16}
          justify="center"
          align="middle"
          style={{ marginBottom: "1em" }}
        >
          {Foundation?.slice(1, Foundation.length)?.map((item) => (
            <Card style={{ width: 300, background: "none" }}>
              <img
                style={{ width: "240px", height: "160px" }}
                src={`http://192.168.60.35:1336${item.image.url}`}
              />
              <p className="font-medium text-center">{item.about}</p>
            </Card>
          ))}
        </Row>
      </div>
    )
  );
};

export default Foundation;
