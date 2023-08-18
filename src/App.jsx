import React from "react";
import {
  Hero,
  About,
  Courses,
  Reservation,
  Contact,
  Gallery,
} from "./sections";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Courses />
      {/* <Reservation /> */}
      <Contact />
    </div>
  );
};

export default App;
