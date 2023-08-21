import React, { useRef, useLayoutEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";

import "./Navbar.css";

import booksy from "../assets/booksy.png";

const Navbar = () => {
  const navRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".navbar__item", 1, {
        y: "-100%",
        ease: "power3.inOut",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <ul className="navbar" ref={navRef}>
        <li className="navbar__item">
          <a onClick={showNav} className="navbar__item-link" href="#">
            Головна
          </a>
        </li>
        <li className="navbar__item">
          <a onClick={showNav} className="navbar__item-link" href="#about">
            Про мене
          </a>
        </li>
        <li className="navbar__item">
          <a onClick={showNav} className="navbar__item-link" href="#gallery">
            Галерея
          </a>
        </li>
        <li className="navbar__item">
          <a onClick={showNav} className="navbar__item-link" href="#courses">
            Курси
          </a>
        </li>
        <li className="navbar__item">
          <a
            onClick={showNav}
            className="navbar__item-link"
            href="https://booksy.com/pl-pl/101698_lico_brwi-i-rzesy_3_warszawa/staffer/173246#ba_s=bd_1"
            target="blank">
            Записатися
            <img src={booksy} alt="" />
          </a>
        </li>
        <li className="navbar__item">
          <a onClick={showNav} className="navbar__item-link" href="#contact">
            Контакти
          </a>
        </li>
        <button className="navbar__btn navbar__btn-close" onClick={showNav}>
          <FaTimes />
        </button>
      </ul>
      <button className="navbar__btn navbar__btn-open" onClick={showNav}>
        <FaBars />
      </button>
    </>
  );
};

export default Navbar;
