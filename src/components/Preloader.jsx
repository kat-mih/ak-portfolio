import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import anime from "animejs/lib/anime.es.js";

import "./Preloader.css";

const Preloader = () => {
  const preloader = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      anime.timeline().add({
        targets: ".loader-text .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        delay: (el, i) => 2400 + 30 * i,
      });

      gsap.from(".loader-wrapper", 2, {
        scale: 0.8,
        ease: "power1.inOut",
      });

      gsap.from(".loader", 2, {
        top: "100%",
        ease: "power3.inOut",
      });

      gsap.to(
        ".loader-wrapper, .pre-loader",
        1,
        {
          scale: 1.5,
          opacity: 0,
          display: "none",
          ease: "power3.inOut",
          delay: 2,
        },
        "-=1"
      );

      gsap.from(".revealer", 1, {
        width: "0%",
        ease: "power3.inOut",
        delay: 3,
      });

      gsap.to(".revealer", 0.8, {
        left: "100%",
        ease: "power3.inOut",
        delay: 4,
      });

      gsap.to(".loader-text-wrapper", 0.2, {
        opacity: 0,
        display: "none",
        ease: "power3.inOut",
        delay: 4,
      });
    }, preloader);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={preloader} className="loader-container">
      {/* <img src={loader} alt="" /> */}
      <div className="loader-text-wrapper block">
        <h1 className="loader-text">
          {"АННА".split("").map((letter, index) => (
            <span key={index} className="letter">
              {letter}
            </span>
          ))}
        </h1>
      </div>
      <div className="revealer"></div>
      <div className="pre-loader block">
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
