import React, { useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";

import "./Hero.css";
import "swiper/css";
// import "swiper/css/lazy";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

import left from "../assets/main_left.jpeg";
import { one, two, three, four } from "../assets/hero";

const Hero = () => {
  const heroRightImages = [four, three, two, one];
  const heroSec = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero__swiper", 2, {
        right: "100%",
        ease: "power3.inOut",
      });

      gsap.from(".hero__left", 1, {
        opacity: 0,
        ease: "power3.inOut",
      });
    }, heroSec);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroSec} className="hero">
      <div className="hero__left">
        <img src={left} alt="" />
        <p>б'юті-експерт | естетика | PMU</p>
      </div>
      <div className="hero__right">
        <Swiper
          effect={"fade"}
          loop={true}
          lazy={true}
          speed={600}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="hero__swiper">
          {heroRightImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="hero__right-header">
          Aня <br /> Kапiтaнюк
        </p>
      </div>
    </div>
  );
};

export default Hero;
