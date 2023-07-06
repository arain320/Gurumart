import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import heart from "../../assets/heart.svg";
import star from "../../assets/star.svg";
import slider13 from "../../assets/slider13.png";
import slider14 from "../../assets/slider14.png";
import slider15 from "../../assets/slider15.png";
import slider16 from "../../assets/slider16.png";
import slider17 from "../../assets/slider17.png";
import slider18 from "../../assets/slider18.png";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";

const TodayDeals = () => {
  return (
    <>
      <section className="w-full py-6">
        <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-5 px-3 py-8 mt-5">
          <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
            <h3 className="text-4xl font-extrabold">
              Todays Best Deals For You!
            </h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className="flex flex-wrap gap-5">
              <button className="px-6 py-3 rounded-[20px] border-[1px] border-black">
                Gadgets
              </button>
              <button className="px-6 py-3 rounded-[20px] border-[1px] border-black">
                Fashion
              </button>
              <button className="px-6 py-3 rounded-[20px] border-[1px] border-black">
                Toys
              </button>
              <button className="px-6 py-3 rounded-[20px] border-[1px] border-black">
                Education
              </button>
              <button className="px-6 py-3 rounded-[20px] border-[1px] border-black">
                Beauty
              </button>
              <button className="px-6 py-3 rounded-[20px] border-[1px] border-black">
                Fitness
              </button>
              <button className="px-6 py-3 rounded-[20px] border-[1px] border-black">
                Furnture
              </button>
              <button className="px-6 py-3 rounded-[20px] border-[1px] border-black">
                Sneaker
              </button>
            </div>
          </ScrollAnimation>
          <div className="flex justify-center items-center gap-3 flex-wrap mt-2">
            <div className="w-[300px] h-[450px] flex flex-col bg-white rounded-2xl overflow-hidden mb-8">
              <div className="h-[65%] relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl">
                <img
                  src={slider13}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
                <div className="absolute top-4 right-3 rounded-[50%] w-[40px] h-[40px] flex justify-center items-center bg-[#fff]">
                  <img
                    src={heart}
                    alt=""
                    className="hover:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
              </div>
              <div className="h-[35%] flex flex-col gap-2 p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium">Laptop Sleeve</span>
                  <p className="text-lg font-medium">
                    $
                    <span className="text-xl font-medium text-red-600">
                      2300
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    Organic, Fairtrade Certified
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <div>(121)</div>
                </div>
                <div>
                  <button className="py-2 px-4 border-[1px] border-black border-solid rounded-3xl hover:bg-[#212844] hover:text-white">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[450px] flex flex-col bg-white rounded-2xl overflow-hidden mb-8">
              <div className="h-[65%] relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl">
                <img
                  src={slider14}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
                <div className="absolute top-4 right-3 rounded-[50%] w-[40px] h-[40px] flex justify-center items-center bg-[#fff]">
                  <img
                    src={heart}
                    alt=""
                    className="hover:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
              </div>
              <div className="h-[35%] flex flex-col gap-2 p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium">Stylish Tablet</span>
                  <p className="text-lg font-medium">
                    $
                    <span className="text-xl font-medium text-red-600">
                      2300
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    Modern And Stylish Tablet
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <div>(121)</div>
                </div>
                <div>
                  <button className="py-2 px-4 border-[1px] border-black border-solid rounded-3xl hover:bg-[#212844] hover:text-white">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[450px] flex flex-col bg-white rounded-2xl overflow-hidden mb-8">
              <div className="h-[65%] relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl">
                <img
                  src={slider15}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
                <div className="absolute top-4 right-3 rounded-[50%] w-[40px] h-[40px] flex justify-center items-center bg-[#fff]">
                  <img
                    src={heart}
                    alt=""
                    className="hover:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
              </div>
              <div className="h-[35%] flex flex-col gap-2 p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium">Laptop Sleeve Red</span>
                  <p className="text-lg font-medium">
                    $
                    <span className="text-xl font-medium text-red-600">
                      2300
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    Organic, Fairtrade, Certified
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <div>(121)</div>
                </div>
                <div>
                  <button className="py-2 px-4 border-[1px] border-black border-solid rounded-3xl hover:bg-[#212844] hover:text-white">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[450px] flex flex-col bg-white rounded-2xl overflow-hidden mb-8">
              <div className="h-[65%] relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl">
                <img
                  src={slider16}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
                <div className="absolute top-4 right-3 rounded-[50%] w-[40px] h-[40px] flex justify-center items-center bg-[#fff]">
                  <img
                    src={heart}
                    alt=""
                    className="hover:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
              </div>
              <div className="h-[35%] flex flex-col gap-2 p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium">Insta Mini 9</span>
                  <p className="text-lg font-medium">
                    $
                    <span className="text-xl font-medium text-red-600">
                      2300
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    Modern And Advanced{" "}
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <div>(121)</div>
                </div>
                <div>
                  <button className="py-2 px-4 border-[1px] border-black border-solid rounded-3xl hover:bg-[#212844] hover:text-white">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[450px] flex flex-col bg-white rounded-2xl overflow-hidden mb-8">
              <div className="h-[65%] relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl">
                <img
                  src={slider17}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
                <div className="absolute top-4 right-3 rounded-[50%] w-[40px] h-[40px] flex justify-center items-center bg-[#fff]">
                  <img
                    src={heart}
                    alt=""
                    className="hover:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
              </div>
              <div className="h-[35%] flex flex-col gap-2 p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium">
                    Flower Laptop Sleeve
                  </span>
                  <p className="text-lg font-medium">
                    $
                    <span className="text-xl font-medium text-red-600">
                      2300
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    15 in x 10 fuel top
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <div>(121)</div>
                </div>
                <div>
                  <button className="py-2 px-4 border-[1px] border-black border-solid rounded-3xl hover:bg-[#212844] hover:text-white">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[450px] flex flex-col bg-white rounded-2xl overflow-hidden mb-8">
              <div className="h-[65%] relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl">
                <img
                  src={slider18}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
                <div className="absolute top-4 right-3 rounded-[50%] w-[40px] h-[40px] flex justify-center items-center bg-[#fff]">
                  <img
                    src={heart}
                    alt=""
                    className="hover:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
              </div>
              <div className="h-[35%] flex flex-col gap-2 p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium">Macbook 13 Pro</span>
                  <p className="text-lg font-medium">
                    $
                    <span className="text-xl font-medium text-red-600">
                      2300
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">256 GB, 8 GB</span>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <div>(121)</div>
                </div>
                <div>
                  <button className="py-2 px-4 border-[1px] border-black border-solid rounded-3xl hover:bg-[#212844] hover:text-white">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[450px] flex flex-col bg-white rounded-2xl overflow-hidden mb-8">
              <div className="h-[65%] relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl">
                <img
                  src={slider1}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
                <div className="absolute top-4 right-3 rounded-[50%] w-[40px] h-[40px] flex justify-center items-center bg-[#fff]">
                  <img
                    src={heart}
                    alt=""
                    className="hover:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
              </div>
              <div className="h-[35%] flex flex-col gap-2 p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium">Homopod Mini</span>
                  <p className="text-lg font-medium">
                    $
                    <span className="text-xl font-medium text-red-600">
                      2300
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    Table With Air Purffier
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <div>(121)</div>
                </div>
                <div>
                  <button className="py-2 px-4 border-[1px] border-black border-solid rounded-3xl hover:bg-[#212844] hover:text-white">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[450px] flex flex-col bg-white rounded-2xl overflow-hidden mb-8">
              <div className="h-[65%] relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl">
                <img
                  src={slider2}
                  alt=""
                  className="hover:scale-110 transition-all duration-300 ease-linear"
                />
                <div className="absolute top-4 right-3 rounded-[50%] w-[40px] h-[40px] flex justify-center items-center bg-[#fff]">
                  <img
                    src={heart}
                    alt=""
                    className="hover:scale-110 transition-all duration-300 ease-linear"
                  />
                </div>
              </div>
              <div className="h-[35%] flex flex-col gap-2 p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium">Insta Mini Blue</span>
                  <p className="text-lg font-medium">
                    $
                    <span className="text-xl font-medium text-red-600">
                      2300
                    </span>{" "}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    Best For Daily Use
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                  <div>(121)</div>
                </div>
                <div>
                  <button className="py-2 px-4 border-[1px] border-black border-solid rounded-3xl hover:bg-[#212844] hover:text-white">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodayDeals;
