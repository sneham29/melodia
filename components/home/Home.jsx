import React from "react";
import Hero from "./hero/Hero";
import HAbout from "./HAbout";
//import Hblog from "./Hblog";
import Back from "../common/back/Back";
import Testimonal from "./testimonal/Testimonal";
import Hprice from "./Hprice";
import AboutCard from "../about/AboutCard";

const Home = () => {
  return (
    <>
    <Back title={Home}/>
      <Hero />
      <Testimonal/>
    </>
  );
};

export default Home;
