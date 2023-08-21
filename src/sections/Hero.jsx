import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Hero.css";
import "swiper/css";
// import "swiper/css/lazy";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

import left from "../assets/main_left.jpeg";
import { one, two, three, four } from "../assets/hero";

const Hero = () => {
  const heroRightImages = [one, two, three, four];

  return (
    <div className="hero">
      <div className="hero__left">
        <img src={left} alt="" />
        <p>б'юті-експерт|естетика|PMU</p>
      </div>
      <div className="hero__right">
        <Swiper
          effect={"fade"}
          loop={true}
          speed={400}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="hero__swiper">
          {heroRightImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="hero__right-header">Aнна Kапiтaнюк</p>
      </div>
    </div>
  );
};

export default Hero;
