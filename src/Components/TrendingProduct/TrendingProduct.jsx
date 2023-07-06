import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import paraflex from "../../assets/paraflex.png";
import paraflex1 from "../../assets/paraflex1.png";

const TrendingProduct = () => {
  return (
    <>
      <div className="w-full py-6">
        <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-5 px-3 py-8 mt-5">
          <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
            <h2 className="text-4xl font-extrabold">
              Trending Products For You!
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animateOut="fadeOut" animateIn="fadeIn">
            <div className="flex flex-wrap flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex flex-col flex-1 rounded-[20px] overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={paraflex}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-200 ease-linear"
                  />
                </div>
                <div className="flex flex-col pl-[20px] bg-slate-100">
                  <h3 className="mt-4 text-2xl font-bold">Furniture Village</h3>
                  <p className="text-[#201e1e] text-sm mt-3">
                    Delivery with in 24 hours
                  </p>
                  <button className="px-5 py-2 bg-black text-white rounded-[20px] items-start w-[130px] mt-7 hover:bg-[#212844] mb-5">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-1 rounded-[20px] overflow-hidden group">
                <div className="overflow-hidden">
                  <img
                    src={paraflex1}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-200 ease-linear"
                  />
                </div>
                <div className="flex flex-col pl-[20px] bg-slate-100">
                  <h3 className="mt-4 text-2xl font-bold">Fashion World</h3>
                  <p className="text-[#201e1e] text-sm mt-3">
                    Delivery with in 24 hours
                  </p>
                  <button className="px-5 py-2 bg-black text-white rounded-[20px] items-start w-[130px] mt-7 hover:bg-[#212844] mb-5">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
};

export default TrendingProduct;
