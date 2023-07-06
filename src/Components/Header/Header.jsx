import React, { state } from "react";
import { useState } from "react";
import Guru from "../../assets/Guru Mart.svg";
import cate1 from "../../assets/cate1.png";
import cate2 from "../../assets/cate2.png";
import cate3 from "../../assets/cate3.png";
import cate4 from "../../assets/cate4.png";
import cate5 from "../../assets/cate5.png";
import cate6 from "../../assets/cate6.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleLag = () => {
    setOpen(!open);
  };
  const handleLoc = () => {
    setOpen2(!open2);
  };
  const handleCat = () => {
    setOpen3(!open3);
  };
  const handleNav = () => {
    setOpen4(!open4);
    setOpen3(false);
  };
  return (
    <>
      <header className="max-w-[1280px] mx-auto">
        <div className="w-full flex flex-col bg-[#212844] relative">
          <div className="flex justify-between items-center px-8 py-2">
            <div className="flex justify-center items-center gap-3">
              <i className="fa-solid fa-phone text-white"></i>
              <span className="text-white">+923049982740</span>
            </div>
            <div className="max-[768px]:hidden">
              <span className="text-white">
                Get 50% Off on Selected Items | Shop Now
              </span>
            </div>
            <div className="flex gap-5">
              <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={handleLag}
              >
                <span className="text-white">Eng</span>
                <i className="fa-sharp fa-solid fa-chevron-down text-white"></i>
              </div>
              <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={handleLoc}
              >
                <span className="text-white">Loction</span>
                <i className="fa-sharp fa-solid fa-chevron-down text-white"></i>
              </div>
            </div>
            {open ? (
              <div className="flex flex-col gap-1 absolute top-[50px] right-[100px] bg-white w-[100px] h-[100px] px-2 shadow-md z-10">
                <span className="text-black border-b-[1px] cursor-pointer">
                  Arabic
                </span>
                <span className="text-black border-b-[1px] cursor-pointer">
                  German
                </span>
                <span className="text-black border-b-[1px] cursor-pointer">
                  Urdu
                </span>
              </div>
            ) : (
              ""
            )}
            {open2 ? (
              <div className="flex flex-col gap-1 absolute top-[50px] right-[0px] bg-white w-[100px] h-[100px] px-2 shadow-md z-10">
                <span className="text-black border-b-[1px] cursor-pointer">
                  USA
                </span>
                <span className="text-black border-b-[1px] cursor-pointer">
                  German
                </span>
                <span className="text-black border-b-[1px] cursor-pointer">
                  Pakistan
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <nav>
          <div className="w-full bg-white z-[5]">
            <div className="w-full flex justify-between items-center px-8 py-2 relative">
              <div className="flex items-center gap-4 cursor-pointer">
                <img src={Guru} alt="" className="w-[200px]" />
              </div>
              <ul
                className={
                  !open4
                    ? "flex items-center gap-4 max-[800px]:absolute max-[800px]:top-[100px] max-[800px]:left-5 max-[800px]:w-full max-[800px]:flex-col max-[800px]:opacity-0 max-[800px]:bg-white max-[800px]:py-4"
                    : "flex items-center gap-4 max-[800px]:absolute max-[800px]:top-[100px] max-[800px]:left-5 max-[800px]:w-full max-[800px]:flex-col max-[800px]:opacity-[1] max-[800px]:bg-white max-[800px]:py-4"
                }
              >
                <li
                  className="flex items-center gap-2 cursor-pointer font-medium max-[800px]:order-4"
                  onClick={handleCat}
                >
                  Category
                  <i className="fa-sharp fa-solid fa-chevron-down text-black"></i>
                </li>
                <li className="font-medium cursor-pointer">Deals</li>
                <li className="font-medium cursor-pointer">Whats New</li>
                <li className="font-medium cursor-pointer">Delivery</li>
              </ul>
              <div className="relative max-[1100px]:hidden">
                <input
                  type="text"
                  placeholder="Search products"
                  className="border-solid border-[1px] outline-0 border-blue-500 py-2 px-2 rounded-[30px] w-[300px] "
                />

                <i className="fa-solid fa-magnifying-glass absolute top-[10px] right-[10px]"></i>
              </div>
              <div className="flex items-center gap-2 max-[600px]:hidden">
                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-user"></i>
                  Accounts
                </div>
                <div className="flex items-center gap-1">
                  <i className="fa-sharp fa-solid fa-cart-shopping"></i>
                  Cart
                </div>
              </div>
              {open3 ? (
                <div className="absolute top-[80px] left-[250px] w-[800px] bg-white shadow-lg z-[3] max-[800px]:top-[280px] max-[800px]:left-[10px] max-[800px]:w-full max-[1070px]:left-[20px]">
                  <div className="flex flex-col gap-2 px-4 py-2">
                    <div className="border-b-[1px] py-5 pl-5">
                      <h3 className="text-2xl font-medium max-[800px]:text-center">
                        Popular Categories
                      </h3>
                    </div>

                    <div className="flex max-[800px]:flex-col flex-wrap justify-center items-center gap-8 py-4">
                      <div className="flex gap-2 bg-slate-100 w-[350px] items-center">
                        <div className="flex justify-center items-center p-2">
                          <img src={cate1} alt="" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-xl font-normal">Furniture</h3>
                          <p className="text-sm">240 Items Available</p>
                        </div>
                      </div>
                      <div className="flex gap-2 bg-slate-100 w-[350px] items-center">
                        <div className="flex justify-center items-center p-2">
                          <img src={cate2} alt="" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-xl font-normal">Hand Bag</h3>
                          <p className="text-sm">240 Items Available</p>
                        </div>
                      </div>
                      <div className="flex gap-2 bg-slate-100 w-[350px] items-center">
                        <div className="flex justify-center items-center p-2">
                          <img src={cate3} alt="" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-xl font-normal">Shoe</h3>
                          <p className="text-sm">240 Items Available</p>
                        </div>
                      </div>
                      <div className="flex gap-2 bg-slate-100 w-[350px] items-center">
                        <div className="flex justify-center items-center p-2">
                          <img src={cate4} alt="" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-xl font-normal">Head Phone</h3>
                          <p className="text-sm">240 Items Available</p>
                        </div>
                      </div>
                      <div className="flex gap-2 bg-slate-100 w-[350px] items-center">
                        <div className="flex justify-center items-center p-2">
                          <img src={cate5} alt="" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-xl font-normal">Laptop</h3>
                          <p className="text-sm">240 Items Available</p>
                        </div>
                      </div>
                      <div className="flex gap-2 bg-slate-100 w-[350px] items-center">
                        <div className="flex justify-center items-center p-2">
                          <img src={cate6} alt="" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-xl font-normal">Book</h3>
                          <p className="text-sm">240 Items Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div>
                <i
                  className="fa-solid fa-bars text-[20px] hidden max-[800px]:block"
                  onClick={handleNav}
                ></i>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
