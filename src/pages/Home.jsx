import React from "react";
import Banner from "../components/Banner";
import AppSection from "../components/AppSection";
import AllService from "../components/AllService";
import OtherCard from "../components/OtherCard";
import Customer from "../components/Customer";
// import ServiceForm from "./ServiceForm";

const Home = () => {
  return (
    <>
      <Banner />
      <AppSection />
      <AllService />
      <OtherCard />
      <Customer />
      {/* {/* <ServiceForm/> */}
    </>
  );
};

export default Home;
