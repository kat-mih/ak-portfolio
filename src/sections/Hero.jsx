import React from "react";
import Navbar from "../components/Navbar.jsx";
import "./Hero.css";

import left from "../assets/main_left.jpeg";
import right from "../assets/main_right.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <img src={left} alt="" />
        <p>б'юті-експерт|естетика|PMU</p>
      </div>
      <div className="hero__right">
        <img src={right} alt="" />
        <p className="hero__right-header">Aнна Kапiтaнюк</p>
      </div>
    </div>
  );
};

export default Hero;
