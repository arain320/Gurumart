import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import SliderCard from "../SliderCard/SliderCard";
import slider7 from "../../assets/slider7.png";
import slider8 from "../../assets/slider8.png";
import slider9 from "../../assets/slider9.png";
import slider10 from "../../assets/slider10.png";
import slider11 from "../../assets/slider11.png";
import slider12 from "../../assets/slider12.png";

const Popular = () => {
  return (
    <>
      <section className="w-full py-7">
        <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-7 mt-6 px-3 overflow-x-hidden">
          <h3 className="text-3xl sm:text-4xl font-extrabold px-4">
            Weekly Popular Products
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                500: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Scrollbar, Autoplay]}
              scrollbar={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <SliderCard
                  person={{
                    image: slider7,
                    name: "HomoPod mini",
                    desc: "Table with air purifier, stained veneer/black",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard
                  person={{
                    image: slider8,
                    name: "Insta Mini 9",
                    desc: "Selfie Mode and Selfie Mirror, Macro Mode",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard
                  person={{
                    image: slider9,
                    name: "Base Camp Bag",
                    desc: "A Bag For Transport",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard
                  person={{
                    image: slider10,
                    name: "Fashion Hand Bag",
                    desc: "Modern And Stylish Hand Bag",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard
                  person={{
                    image: slider11,
                    name: "Stylish Head Phone",
                    desc: "Green Head Phone For Use",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard
                  person={{
                    image: slider12,
                    name: "Sports Watch",
                    desc: "Running And Sports Watch",
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
