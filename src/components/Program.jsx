import api from "../action/api";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Divider } from "antd";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { HomepageContext } from "../pages/Homepage";
import { motion } from "framer-motion";

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
    program && (
      <div
        style={{
          backgroundColor: "ghostwhite",
          // paddingBlock: "1.25em",
          // paddingBottom: "1em",
          // padding: "2% 3% 3% 3%",
        }}
      >
        <h1 className="text-center text-orange-500 text-3xl py-16 font-medium">
          {program[0]?.title}
        </h1>
        {/* <hr /> */}
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            390: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mx-20"
          key={"program"}
        >
          {program?.slice(1, program.length)?.map((item, ind) => (
            <SwiperSlide className="flex justify-evenly bg-orange-50 mb-10  shadow-xl hover: cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring, stiffness: 400 damping: 50" }}
              >
                <Card
                  style={{
                    background: "none",
                    border: "none",
                    // outline: "auto",
                    display: "flex",
                    justifyContent: "center",
                    height: "70%",
                    margin: "1em",
                  }}
                >
                  <img
                    style={{
                      height: "220px",
                      zIndex: "0",
                      margin: "auto",
                    }}
                    src={`https://api.shevabd.org${item.image.url}`}
                    alt="cards"
                  />
                  <span>
                    <p className="font-medium mx-auto border-none z-10 text-center">
                      {item.about}
                    </p>
                  </span>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Swiper
					slidesPerView={3}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
					modules={[Pagination]}
					className="mySwiper mx-10"
				>
					<SwiperSlide className="p-20 border border-black">
						Slide 1
					</SwiperSlide>
					<SwiperSlide className="p-20 border border-black">
						Slide 2
					</SwiperSlide>
					<SwiperSlide className="p-20 border border-black">
						Slide 3
					</SwiperSlide>
					<SwiperSlide className="p-20 border border-black">
						Slide 4
					</SwiperSlide>
					<SwiperSlide className="p-20 border border-black">
						Slide 5
					</SwiperSlide>
					<SwiperSlide className="p-20 border border-black">
						Slide 6
					</SwiperSlide>
					<SwiperSlide className="p-20 border border-black">
						Slide 7
					</SwiperSlide>
					<SwiperSlide className="p-20 border border-black">
						Slide 8
					</SwiperSlide>
					<SwiperSlide className="p-20 border border-black">
						Slide 9
					</SwiperSlide>
				</Swiper> */}
      </div>
    )
  );
};

export default Program;
