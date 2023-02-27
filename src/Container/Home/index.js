import React from "react";
import Header from "./../../Components/Common/Header";
import Banner from "./Banner";
import Filter from "./Filter";
import LaptopGaming from "./LaptopGaming";
import Navigation from "./Navigation";
import SliderContent from "./SliderContent";
import FilterAccessory from "./FilterAccessory"
import Footer from "./../../Components/Common/Footer"
import Copyright from "./../../Components/Common/Copyright"
import { HomeWrapper } from "./style";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Navigation />
      <Banner />
      <SliderContent />
      <Filter />
      <LaptopGaming />
      <FilterAccessory />
      <Footer />
      <Copyright />
    </HomeWrapper>
  );
};

export default Home;
