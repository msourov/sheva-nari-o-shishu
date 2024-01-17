import api from "../../action/api";
import { useContext } from "react";
import { HomepageContext } from "../../pages/Homepage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "antd";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const { Meta } = Card;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Program = () => {
  const { program } = useContext(HomepageContext);
  return (
    <div>
      <h1 className="text-center text-orange-500 text-3xl my-8">
        {program[0]?.title}
      </h1>
      <Swiper
        className="mt-10 mb-10"
        slidesPerView={4}
        spaceBetween={0}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        style={{
          display: "flex",
          justifyContent: "center",
          marginInline: "5em",
        }}
        // className="mySwiper"
      >
        {program?.slice(1, program.length)?.map((item, ind) => (
          <SwiperSlide>
            <Card style={{ width: 300, background: "none", border: "none" }}>
              <img
                style={{ width: "240px", height: "160px" }}
                src={`http://192.168.60.35:1336${item.image.url}`}
              />
              <p className="font-medium mx-auto border-none">{item.about}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Program;
