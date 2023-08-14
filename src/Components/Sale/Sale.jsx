import React from "react";
import save1 from "../../assets/save1.png";
import save2 from "../../assets/save2.png";
import save3 from "../../assets/save3.png";
import save4 from "../../assets/save4.png";

const Sale = () => {
  return (
    <>
      <section className=" w-full py-6">
        <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-5 px-3 sm:px-8 py-8 mt-5">
          <h3 className="text-4xl font-extrabold max-[1275px]:pl-[60px] max-[955px]:pl-[100px] max-[550px]:pl-4">
            Get Up To 70% Off
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="w-[280px] h-[400px] rounded-md overflow-hidden flex flex-wrap bg-[#f2e4d9] group">
              <div className="flex flex-col gap-3 h-[50%] p-4">
                <h4 className="text-3xl font-extrabold ">Save</h4>
                <p className="text-[#cb9917] text-3xl font-extrabold">
                  $<span className="text-5xl font-extrabold">100</span>
                </p>
                <p>Explore Our Furniture & Home Furnishing Range</p>
              </div>
              <div className="h-[50%] overflow-hidden">
                <img
                  src={save1}
                  alt=""
                  className="group-hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
            </div>
            <div className="w-[280px] h-[400px] rounded-md overflow-hidden flex flex-wrap bg-[#f9dcdc] group">
              <div className="flex flex-col gap-3 h-[50%] p-4">
                <h4 className="text-3xl font-extrabold">Save</h4>
                <p className="text-[#961f1f] text-3xl font-extrabold">
                  $<span className="text-5xl font-extrabold">29</span>
                </p>
                <p>Explore Our Furniture & Home Furnishing Range</p>
              </div>
              <div className="h-[50%] overflow-hidden">
                <img
                  src={save3}
                  alt=""
                  className="group-hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
            </div>{" "}
            <div className="w-[280px] h-[400px] rounded-md overflow-hidden flex flex-wrap bg-[#f2e4d9] group">
              <div className="flex flex-col gap-3 h-[50%] p-4">
                <h4 className="text-3xl font-extrabold">Save</h4>
                <p className="text-[#94623c] text-3xl font-extrabold">
                  $<span className="text-5xl font-extrabold">67</span>
                </p>
                <p>Explore Our Furniture & Home Furnishing Range</p>
              </div>
              <div className="h-[50%] overflow-hidden">
                <img
                  src={save2}
                  alt=""
                  className="group-hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
            </div>{" "}
            <div className="w-[280px] h-[400px] rounded-md overflow-hidden flex flex-wrap bg-[#d2f7ec] group">
              <div className="flex flex-col gap-3 h-[50%] p-4">
                <h4 className="text-3xl font-extrabold">Save</h4>
                <p className="text-[#003d29] text-3xl font-extrabold">
                  $<span className="text-5xl font-extrabold">59</span>
                </p>
                <p>Explore Our Furniture & Home Furnishing Range</p>
              </div>
              <div className="h-[50%] overflow-hidden ">
                <img
                  src={save4}
                  alt=""
                  className="group-hover:scale-110 transition-all duration-300 ease-linear"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sale;
