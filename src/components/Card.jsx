import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import CardMore from "./CardMore";
import "./Card.css";

const Card = ({ name, description, program }) => {
  const [height, setHeight] = useState(0);

  return (
    <>
      <div className="card">
        <header className="card__header">{name}</header>
        <div className="card__body">
          <div className="card__body-description">{description}</div>
          <AnimateHeight id="example-panel" duration={700} height={height}>
            <CardMore program={program} />
          </AnimateHeight>
          <button
            aria-controls="example-panel"
            className="card__body-btn"
            onClick={() => setHeight(height === 0 ? "auto" : 0)}>
            {height === 0 ? "Дізнатися більше" : "Закрити"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
