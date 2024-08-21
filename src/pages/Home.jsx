import React from "react";
import Banner from "../components/Banner";
import AppSection from "../components/AppSection";
import AllService from "../components/AllService";
import OtherCard from "../components/OtherCard";
import Customer from "../components/Customer";

const Home = () => {
  return (
    <div>
      <Banner />
      <AppSection />
      <AllService />
      <OtherCard />
      <Customer />
    </div>
  );
};

export default Home;
