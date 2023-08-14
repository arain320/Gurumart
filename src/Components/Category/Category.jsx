import React from "react";
import furniture from "../../assets/furniture.png";
import handBag from "../../assets/handbag.png";
import book from "../../assets/books.png";
import tech from "../../assets/tech.png";
import sneaker from "../../assets/sneakers.png";
import travel from "../../assets/travel.png";

const Category = () => {
  return (
    <>
      <section className="w-full py-6 px-2">
        <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-5 px-3 py-8 mt-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Shop Our Top Categories
          </h2>

          <div className="flex  gap-2 sm:gap-5 flex-wrap mt-3 justify-evenly">
            <div className="w-[190px] max-[430px]:w-[150px] h-[250px] relative rounded-lg overflow-hidden group text-center">
              <img
                src={furniture}
                alt=""
                className="w-full block group-hover:scale-125 duration-500 ease-in-out transition-all"
              />
              <span className="absolute top-2 left-[50%] translate-x-[-50%] text-2xl text-white font-medium text-center">
                furniture{" "}
              </span>
            </div>
            <div className="w-[190px] max-[430px]:w-[150px] h-[250px] relative rounded-lg overflow-hidden group">
              <img
                src={handBag}
                alt=""
                className="w-full block group-hover:scale-125 duration-500 ease-in-out transition-all"
              />
              <span className="absolute top-2 left-[50%] translate-x-[-50%]  text-2xl text-white font-medium">
                Bag
              </span>
            </div>
            <div className="w-[190px] max-[430px]:w-[150px] h-[250px] relative rounded-lg overflow-hidden group">
              <img
                src={book}
                alt=""
                className="w-full block group-hover:scale-125 duration-500 ease-in-out transition-all"
              />
              <span className="absolute top-2 left-[50%] translate-x-[-50%]  text-2xl text-white font-medium">
                Books
              </span>
            </div>
            <div className="w-[190px] max-[430px]:w-[150px] h-[250px] relative rounded-lg overflow-hidden group">
              <img
                src={tech}
                alt=""
                className="w-full block group-hover:scale-125 duration-500 ease-in-out transition-all"
              />
              <span className="absolute top-2 left-[50%] translate-x-[-50%]  text-2xl text-white font-medium">
                Tech
              </span>
            </div>
            <div className="w-[190px] max-[430px]:w-[150px] h-[250px] relative rounded-lg overflow-hidden group">
              <img
                src={sneaker}
                alt=""
                className="w-full block group-hover:scale-125 duration-500 ease-in-out transition-all"
              />
              <span className="absolute top-2 left-[50%] translate-x-[-50%]  text-2xl text-white font-medium">
                Sneakers
              </span>
            </div>
            <div className="w-[190px] max-[430px]:w-[150px] h-[250px] relative rounded-lg overflow-hidden group">
              <img
                src={travel}
                alt=""
                className="w-full block group-hover:scale-125 duration-500 ease-in-out transition-all"
              />
              <span className="absolute top-2 left-[50%] translate-x-[-50%]  text-2xl text-white font-medium">
                Travel
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
