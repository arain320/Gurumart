import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import help1 from "../../assets/help1.png";
import help2 from "../../assets/help2.png";
import help3 from "../../assets/help3.png";

const Help = () => {
  return (
    <>
      <section className="w-full max-w-[1280px] mx-auto py-6">
        <div className="flex flex-col gap-4">
          <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight">
            <h3 className="font-extrabold text-4xl max-[1275px]:pl-[60px] max-[955px]:pl-[100px] max-[550px]:pl-4">
              Services To Help You Shop
            </h3>
          </ScrollAnimation>
          <ScrollAnimation
            delay={2000}
            animateIn="tada"
            initiallyVisible={true}
          >
            <div className="flex justify-center items-center gap-5 flex-wrap ">
              <div className="flex flex-col rounded-[20px] overflow-hidden bg-[#f5f6f6] group">
                <div className="p-[30px] flex flex-col gap-5">
                  <h2 className="text-2xl font-bold">
                    Frequently Asked <br /> Questions
                  </h2>
                  <p className="text-black">
                    Updates on safe Shopping in <br /> our Stores
                  </p>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={help1}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-200 ease-linear"
                  />
                </div>
              </div>
              <div className="flex flex-col rounded-[20px] overflow-hidden bg-[#f5f6f6] group">
                <div className="p-[30px] flex flex-col gap-5">
                  <h2 className="text-2xl font-bold">
                    Online Payment <br /> Process
                  </h2>
                  <p className="text-black">
                    Updates on safe Shopping in <br /> our Stores
                  </p>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={help2}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-200 ease-linear"
                  />
                </div>
              </div>
              <div className="flex flex-col rounded-[20px] overflow-hidden bg-[#f5f6f6] group">
                <div className="p-[30px] flex flex-col gap-5">
                  <h2 className="text-2xl font-bold">
                    Home Delivery <br /> Options
                  </h2>
                  <p className="text-black">
                    Updates on safe Shopping in <br /> our Stores
                  </p>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={help3}
                    alt=""
                    className="group-hover:scale-125 transition-all duration-200 ease-linear"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Help;
