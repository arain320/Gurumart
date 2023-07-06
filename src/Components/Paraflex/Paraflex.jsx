import React from "react";
import paraflex from "../../assets/paraflex.png";

const Paraflex = () => {
  return (
    <>
      <section className="max-w-[1280px] mx-auto w-full">
        <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden group">
          <div className="relative w-full h-full">
            <img
              src={paraflex}
              alt=""
              className="w-full h-full group-hover:scale-125 transition-all duration-300 ease-linear"
            />
            <div className="absolute top-[50%] left-[50%] w-[500px] max-[600px]:w-[90%] translate-y-[-30%] max-[1270px]:translate-y-[-40%] max-[1200px]:translate-x-[-10%] max-[930px]:translate-x-[-15%] max-[900px]:translate-x-[-30%] max-[800px]:translate-y-[-50%] max-[800px]:translate-x-[-50%] bg-[#212844]">
              <h3 className="text-white font-bold text-5xl mt-12 px-[3.75rem] leading-[60px] tracking-wide max-[900px]:px-[3rem] max-[900px]:mt-9 max-[900px]:text-4xl max-[500px]:text-2xl max-[500px]:mt-4 max-[500px]:px-[1rem]">
                Get 5% Cash <br /> Back On $200
              </h3>
              <p className="px-[3.75rem] mt-5 text-justify text-white text-lg max-[500px]:text-sm max-[500px]:mt-3 max-[500px]:px-[1rem]">
                Shopping is a bit of a relaxing hobby for me, which is sometimes
                troubling for the bank balance.
              </p>
              <div className="max-[500px]:px-[1rem] max-[500px]:my-4 px-[3.75rem] my-7">
                <button className="px-5 py-2 rounded-[20px] text-white border-[1px] border-solid border-gray-500 hover:bg-gray-700">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Paraflex;
