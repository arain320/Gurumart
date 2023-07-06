import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import card1 from "../../assets/card1.svg";

const PaymentCard = () => {
  return (
    <>
      <div className="w-full max-w-[1280px] mx-auto h-[50vh] bg-[#ffe6cc] flex px-6">
        <div className="w-full flex flex-row justify-center items-center gap-4 relative ">
          <div className="md:w-[50%] w-[100%] h-full flex justify-center  flex-col gap-1">
            <div className="md:pl-5">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOut="fadeOut"
                duration={10}
              >
                <h3 className="text-black font-bold md:text-4xl text-5xl xl:text-5xl mt-12 px-[3.75rem] leading-[60px] tracking-wide">
                  Get 5% Cash Back
                </h3>
              </ScrollAnimation>
              <p className="px-[3.75rem] mt-3 text-justify text-black text-lg">
                on Gurumart.com
              </p>
              <div className="px-[3.75rem] mt-4">
                <button className="px-5 py-2 rounded-[20px] text-black border-[1px] border-solid border-gray-500 hover:bg-gray-700 hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-[50%] h-full md:block hidden">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <img src={card1} alt="" className="rotate-[-30.6deg]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
