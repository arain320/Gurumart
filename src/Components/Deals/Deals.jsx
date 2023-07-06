import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import SliderCard from "../SliderCard/SliderCard";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import slider5 from "../../assets/slider5.png";
import slider6 from "../../assets/slider6.png";

const Deals = () => {
  return (
    <>
      <section className="w-full py-7">
        <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-7 mt-6 px-3 ">
          <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
            <h3 className="text-3xl sm:text-4xl font-extrabold">
              Todays Best Deals For You!
            </h3>
          </ScrollAnimation>
          <div className="flex justify-center items-center gap-3 mb-6">
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
                    image: slider1,
                    name: "HomoPod mini",
                    desc: "Table with air purifier, stained ",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard
                  person={{
                    image: slider2,
                    name: "Insta Mini 9",
                    desc: "Selfie Mode and Selfie Mirror",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard
                  person={{
                    image: slider3,
                    name: "Base Camp Bag",
                    desc: "A Bag For Transport",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard
                  person={{
                    image: slider4,
                    name: "Fashion Hand Bag",
                    desc: "Modern And Stylish Hand Bag",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard
                  person={{
                    image: slider5,
                    name: "Stylish Head Phone",
                    desc: "Green Head Phone For Use",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard
                  person={{
                    image: slider6,
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

export default Deals;
