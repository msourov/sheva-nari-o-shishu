import api from "../../action/apis";
import { useContext } from "react";
import { homepageContext } from "../../pages/Homepage";
import { Carousel } from "antd";
import { Card } from "antd";
const { Meta } = Card;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Program = () => {
  const { child_support_program } = useContext(homepageContext);
  console.log(child_support_program);
  return (
    <div>
      <h2 className="text-orange-500 mt-5 ml-5 text-l font-semibold">
        Our Child Support Program
      </h2>
      {/* <img src={child_support_program[0].image.data.attributes.url} /> */}
      <Carousel
        autoplay
        style={{ marginBlock: "2em", width: "90%", marginInline: "auto" }}
      >
        {/* {child_support_program?.map((item) => (
          <Card
            hoverable
            style={{ width: "240px" }}
            cover={
              <img
                src={item.image.data.attributes.url}
                alt={item.image.data.attributes.name}
              />
            }
          >
            <Meta title={item.about} />
          </Card>
        ))} */}
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Program;
