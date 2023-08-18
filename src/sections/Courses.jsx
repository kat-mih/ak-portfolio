import React from "react";
import Card from "../components/Card";
import "./Courses.css";

const Courses = () => {
  return (
    <div id="courses" className="courses">
      <h2 className="courses__header">
        Hавчайся <span>у</span> мене
      </h2>
      <div className="courses__cards">
        <Card />
      </div>
    </div>
  );
};

export default Courses;
