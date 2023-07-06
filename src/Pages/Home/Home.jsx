import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Category from "../../Components/Category/Category";
import Deals from "../../Components/Deals/Deals";
import Brand from "../../Components/Brand/Brand";
import Sale from "../../Components/Sale/Sale";
import Popular from "../../Components/Popular/Popular";
import Paraflex from "../../Components/Paraflex/Paraflex";
import TodayDeals from "../../Components/TodayDeals/TodayDeals";
import PaymentCard from "../../Components/PaymentCard/PaymentCard";
import TrendingProduct from "../../Components/TrendingProduct/TrendingProduct";
import BestStore from "../../Components/BestStore/BestStore";
import Help from "../../Components/Help/Help";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Deals />
      <Brand />
      <Sale />
      <Popular />
      <Paraflex />
      <TodayDeals />
      <PaymentCard />
      <TrendingProduct />
      <BestStore />
      <Help />
      <Footer />
    </>
  );
};

export default Home;
