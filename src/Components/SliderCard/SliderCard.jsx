import React from "react";
import heart from "../../assets/heart.svg";
import star from "../../assets/star.svg";

const SliderCard = ({ person }) => {
  return (
    <>
      <div className="w-[400px] max-[1220px]:w-[350px] max-[1070px]:w-[300px] max-[930px]:w-[250px] max-[530px]:w-[200px] max-[500px]:w-full flex flex-col bg-white rounded-2xl  mb-8">
        <div className=" relative flex justify-center items-center bg-[#f5f6f6] rounded-2xl">
          <img
            src={person.image}
            alt=""
            className="hover:scale-110 transition-all duration-300 ease-linear max-[670px]:scale-[.8]"
          />
          <div className="absolute top-4 right-3 rounded-[50%] w-[40px] h-[40px] flex justify-center items-center bg-[#fff]">
            <img
              src={heart}
              alt=""
              className="hover:scale-110 transition-all duration-300 ease-linear"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-2 p-3">
          <div className="flex flex-wrap justify-between items-center">
            <span className="text-xl font-medium">{person.name}</span>
            <p className="text-lg font-medium">
              $<span className="text-xl font-medium text-red-600">2300</span>{" "}
            </p>
          </div>
          <div>
            <span className="text-sm text-gray-500">{person.desc}</span>
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
    </>
  );
};

export default SliderCard;
