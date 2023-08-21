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
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4700);
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
        <Preloader />
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
