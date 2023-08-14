import React from "react";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";
import brand6 from "../../assets/brand6.png";
import brand7 from "../../assets/brand7.png";
import brand8 from "../../assets/brand8.png";

const Brand = () => {
  return (
    <>
      <section className="w-full py-6">
        <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-7 mt-6 px-3">
          <h3 className="font-extrabold text-4xl max-[1275px]:pl-[60px] max-[955px]:pl-[100px] max-[550px]:pl-4">
            Choose By Brand
          </h3>

          <div className="flex flex-wrap justify-evenly items-center gap-4">
            <div className="flex w-[300px] h-[100] p-5 rounded-lg bg-[#f5f6f6] hover:border-[1px] hover:border-black hover:border-solid">
              <div className="w-[30%] flex justify-center items-center">
                <img
                  src={brand1}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="w-[70%] flex flex-col justify-center pl-2 gap-2">
                <h3 className="text-xl font-bold">Staples</h3>
                <span className="text-sm">Delivery with in 24 hours</span>
              </div>
            </div>
            <div className="flex  w-[300px] h-[100] p-5 rounded-lg bg-[#f5f6f6] hover:border-[1px] hover:border-black hover:border-solid">
              <div className="w-[30%] flex justify-center items-center">
                <img
                  src={brand8}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="w-[70%] flex flex-col justify-center pl-2 gap-2">
                <h3 className="text-xl font-bold">Sprouts</h3>
                <span className="text-sm">Delivery with in 24 hours</span>
              </div>
            </div>{" "}
            <div className="flex  w-[300px] h-[100] p-5 rounded-lg bg-[#f5f6f6] hover:border-[1px] hover:border-black hover:border-solid">
              <div className="w-[30%] flex justify-center items-center">
                <img
                  src={brand5}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="w-[70%] flex flex-col justify-center pl-2 gap-2">
                <h3 className="text-xl font-bold">Grocery outlet</h3>
                <span className="text-sm">Delivery with in 24 hours</span>
              </div>
            </div>{" "}
            <div className="flex  w-[300px] h-[100] p-5 rounded-lg bg-[#f5f6f6] hover:border-[1px] hover:border-black hover:border-solid">
              <div className="w-[30%] flex justify-center items-center">
                <img
                  src={brand6}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="w-[70%] flex flex-col justify-center pl-2 gap-2">
                <h3 className="text-xl font-bold">Mollie stones</h3>
                <span className="text-sm">Delivery with in 24 hours</span>
              </div>
            </div>{" "}
            <div className="flex  w-[300px] h-[100] p-5 rounded-lg bg-[#f5f6f6] hover:border-[1px] hover:border-black hover:border-solid">
              <div className="w-[30%] flex justify-center items-center">
                <img
                  src={brand4}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="w-[70%] flex flex-col justify-center pl-2 gap-2">
                <h3 className="text-xl font-bold">Sports Basement</h3>
                <span className="text-sm">Delivery with in 24 hours</span>
              </div>
            </div>{" "}
            <div className="flex  w-[300px] h-[100] p-5 rounded-lg bg-[#f5f6f6] hover:border-[1px] hover:border-black hover:border-solid">
              <div className="w-[30%] flex justify-center items-center">
                <img
                  src={brand2}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="w-[70%] flex flex-col justify-center pl-2 gap-2">
                <h3 className="text-xl font-bold">Container Store</h3>
                <span className="text-sm">Delivery with in 24 hours</span>
              </div>
            </div>{" "}
            <div className="flex  w-[300px] h-[100] p-5 rounded-lg bg-[#f5f6f6] hover:border-[1px] hover:border-black hover:border-solid">
              <div className="w-[30%] flex justify-center items-center">
                <img
                  src={brand1}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="w-[70%] flex flex-col justify-center pl-2 gap-2">
                <h3 className="text-xl font-bold">Target</h3>
                <span className="text-sm">Delivery with in 24 hours</span>
              </div>
            </div>{" "}
            <div className="flex  w-[300px] h-[100] p-5 rounded-lg bg-[#f5f6f6] hover:border-[1px] hover:border-black hover:border-solid">
              <div className="w-[30%] flex justify-center items-center">
                <img
                  src={brand7}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
              <div className="w-[70%] flex flex-col justify-center pl-2 gap-2">
                <h3 className="text-xl font-bold">Bevmo!</h3>
                <span className="text-sm">Delivery with in 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
