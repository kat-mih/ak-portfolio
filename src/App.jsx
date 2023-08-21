import React, { useState, useEffect } from "react";
import {
  Hero,
  About,
  Courses,
  Reservation,
  Contact,
  Gallery,
} from "./sections";
import Navbar from "./components/Navbar";

import "./App.css";
import loader from "./assets/loader.gif";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <img src={loader} alt="" />
        </div>
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Gallery />
          <Courses />
          {/* <Reservation /> */}
          <Contact />
        </div>
      )}
    </>
  );
};

export default App;
