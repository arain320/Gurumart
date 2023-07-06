import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Guru from "../../assets/Guru Mart.svg";
import amazon from "../../assets/amazon.png";
import gpay from "../../assets/gpay.png";
import apay from "../../assets/ApplePay.png";
import visa from "../../assets/visa.png";
import master from "../../assets/mastercard.png";
import stripe from "../../assets/stripe.png";
import paypal from "../../assets/paypal.png";
import kalma from "../../assets/klarna.png";
import footer1 from "../../assets/footer1.svg";
import footer2 from "../../assets/footer2.svg";
import footer3 from "../../assets/footer3.svg";

const Footer = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="max-w-[1280px] mx-auto w-full p-4 mt-4">
        <div className="flex flex-col items-center gap-2 w-full mx-auto mt-1 p-4 pt-10 border-solid border-t-[1px] border-black">
          <div className="flex flex-wrap gap-3">
            <div className="flex-3 basis-[480px] flex flex-col gap-5">
              <ScrollAnimation
                duration={10}
                animateIn="hinge"
                initiallyVisible={true}
              >
                <div>
                  <img src={Guru} alt="" />
                </div>
              </ScrollAnimation>
              <div className="flex flex-col gap-3 px-3 leading-7">
                <p className="capitalize">
                  I Saw this design in figma file and i try to convert it in
                  website please give me feedback about my work
                </p>
                <p>husnainsaleem3542@gmail.com</p>
              </div>
              <div className="flex flex-col gap-5 mt-3">
                <h3 className="text-2xl font-semibold">Accepted Payments</h3>
                <div className="flex flex-wrap gap-5">
                  <div className="border-[1px] p-2 rounded-[5px] flex justify-center items-center">
                    <img src={stripe} alt="" />
                  </div>
                  <div className="border-[1px] p-2 rounded-[5px] flex justify-center items-center">
                    <img src={visa} alt="" />
                  </div>
                  <div className="border-[1px] p-2 rounded-[5px] flex justify-center items-center">
                    <img src={master} alt="" />
                  </div>
                  <div className="border-[1px] p-2 rounded-[5px] flex justify-center items-center">
                    <img src={amazon} alt="" />
                  </div>
                  <div className="border-[1px] p-2 rounded-[5px] flex justify-center items-center">
                    <img src={kalma} alt="" />
                  </div>
                  <div className="border-[1px] p-2 rounded-[5px] flex justify-center items-center">
                    <img src={paypal} alt="" />
                  </div>
                  <div className="border-[1px] p-2 rounded-[5px] flex justify-center items-center">
                    <img src={apay} alt="" />
                  </div>
                  <div className="border-[1px] p-2 rounded-[5px] flex justify-center items-center">
                    <img src={gpay} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 basis-[180px] flex flex-col gap-5">
              <h3 className="text-xl font-bold">Department</h3>
              <ul className="flex flex-col gap-1">
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Fashion
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Education Product
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Frozen Food
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Berverages
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Organic Grocery
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Office Suppies
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Beauty Product
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Books
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Electronics & Gadgets
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Travel Accessories
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Fitness
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Sneakers
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Toys
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Furniture
                </li>
              </ul>
            </div>
            <div className="flex-1 basis-[180px] flex flex-col gap-5">
              <h3 className="text-xl font-bold">About US</h3>
              <ul className="flex flex-col gap-1">
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  About Gurumart
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Careers
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  News & Blogs
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Help
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Press Center
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Shop By Location
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Gurumart Brands
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Affliata & Partners
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Ideas & Guides
                </li>
              </ul>
            </div>
            <div className="flex-1 basis-[180px] flex flex-col gap-5">
              <h3 className="text-xl font-bold">Services</h3>
              <ul className="flex flex-col gap-1">
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Gift Card
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Mobile App
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Shipping & Delivery
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Order Pickup
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Account Signup
                </li>
              </ul>
            </div>
            <div className="w-[180px] flex flex-col gap-5">
              <h3 className="text-xl font-bold">Help</h3>
              <ul className="flex flex-col gap-1">
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Gurumart Help
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Returns
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Track Order
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Contact US
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Feedback
                </li>
                <li className="font-medium text-[#a0a0a0] hover:text-[#ff8275] hover:translate-x-2 transition-all duration-150 ease-linear">
                  Security & Fraud
                </li>
              </ul>
            </div>
          </div>

          {/* footer bottom */}
          <div className=" w-full mt-1 p-4 pt-10 border-solid border-t-[1px] border-black">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div className="flex flex-wrap gap-6">
                <div className="flex gap-2">
                  <img src={footer1} alt="" />
                  <p>Become Seller</p>
                </div>
                <div className="flex gap-2">
                  <img src={footer2} alt="" />
                  <p>Gift Cards</p>
                </div>
                <div className="flex gap-2">
                  <img src={footer3} alt="" />
                  <p>Help Canter</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-5">
                <p>Terms of Service</p>
                <p>Privacy & Policy</p>
              </div>
              <div>
                <span>
                  All Right reserved by Hasnain | {day}/{month}/{year}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
