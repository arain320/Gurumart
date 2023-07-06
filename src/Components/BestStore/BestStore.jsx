import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import best1 from "../../assets/best1.png";
import best2 from "../../assets/best2.png";
import best3 from "../../assets/best3.png";
import best4 from "../../assets/best4.png";
import brand1 from "../../assets/brand3.png";
import brand2 from "../../assets/brand7.png";
import brand3 from "../../assets/brand9.png";
import brand4 from "../../assets/brand10.png";

const BestStore = () => {
  return (
    <section className="w-full py-6">
      <div className=" w-full max-w-[1280px] mx-auto flex flex-col gap-5 px-3 py-8 mt-5">
        <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
          <h3 className="font-extrabold text-4xl text-center">
            Best Selling Store
          </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={5}>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <div className=" flex w-[300px] flex-col bg-white rounded-2xl overflow-hidden mb-8">
              <div className=" relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl rounded-b-2xl">
                <img
                  src={best1}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear overflow-hidden"
                />
                <div className="absolute top-[210px] left-5 rounded-[50%] w-[60px] h-[60px] flex justify-center items-center bg-[#fff]">
                  <img
                    src={brand1}
                    alt=""
                    className="hover:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-2 p-3 mt-5">
                <div>
                  <span className="text-xl font-medium">Laptop Sleeve</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    Organic, Fairtrade Certified
                  </span>
                </div>

                <div>
                  <span className="text-red-800 text-sm">
                    Delivery with in 24 hours
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex w-[300px] flex-col bg-white rounded-2xl overflow-hidden mb-8">
              <div className=" relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl rounded-b-2xl">
                <img
                  src={best2}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear overflow-hidden"
                />
                <div className="absolute top-[210px] left-5 rounded-[50%] w-[60px] h-[60px] flex justify-center items-center bg-[#fff]">
                  <img
                    src={brand2}
                    alt=""
                    className="hover:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-2 p-3 mt-5">
                <div>
                  <span className="text-xl font-medium">Laptop Sleeve</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    Organic, Fairtrade Certified
                  </span>
                </div>

                <div>
                  <span className="text-red-800 text-sm">
                    Delivery with in 24 hours
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex w-[300px] flex-col bg-white rounded-2xl overflow-hidden mb-8">
              <div className=" relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl rounded-b-2xl">
                <img
                  src={best3}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear overflow-hidden"
                />
                <div className="absolute top-[210px] left-5 rounded-[50%] w-[60px] h-[60px] flex justify-center items-center bg-[#fff]">
                  <img
                    src={brand3}
                    alt=""
                    className="hover:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-2 p-3 mt-5">
                <div>
                  <span className="text-xl font-medium">Laptop Sleeve</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    Organic, Fairtrade Certified
                  </span>
                </div>

                <div>
                  <span className="text-red-800 text-sm">
                    Delivery with in 24 hours
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex w-[300px] flex-col bg-white rounded-2xl overflow-hidden mb-8">
              <div className=" relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl rounded-b-2xl">
                <img
                  src={best4}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear overflow-hidden"
                />
                <div className="absolute top-[210px] left-5 rounded-[50%] w-[60px] h-[60px] flex justify-center items-center bg-[#fff]">
                  <img
                    src={brand4}
                    alt=""
                    className="hover:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-2 p-3 mt-5">
                <div>
                  <span className="text-xl font-medium">Laptop Sleeve</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    Organic, Fairtrade Certified
                  </span>
                </div>

                <div>
                  <span className="text-red-800 text-sm">
                    Delivery with in 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default BestStore;
