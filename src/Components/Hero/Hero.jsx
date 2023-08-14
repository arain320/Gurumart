import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <>
      <section className="max-w-[1280px] mx-auto">
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            grabCursor={true}
            autoplay={true}
            loop={true}
            speed={300}
            navigation
          >
            <SwiperSlide>
              <img
                src="https://www.dropbox.com/s/ty4tochm2etpnig/slider1.jpg?raw=1"
                alt="slider1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.dropbox.com/s/eysytbe3zrw6me8/slider7.jpg?raw=1"
                alt="slider7"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.dropbox.com/s/3iqibnwhqi2ky4z/slider3.png?raw=1"
                alt="slider3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.dropbox.com/s/7i0z3x001wh0qyg/slider4.jpg?raw=1"
                alt="slider4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.dropbox.com/s/wtqtvma9m9kmr30/slider5.jpg?raw=1"
                alt="slider5"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.dropbox.com/s/e35h09s7thyqnk5/slider6.jpg?raw=1"
                alt="slider6"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.dropbox.com/s/ipw57hqgqcbt68r/slider9.png?raw=1"
                alt="slider9"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.dropbox.com/s/6g6k4wjgn7nq768/slider10.jpg?raw=1"
                alt="slider10"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;
