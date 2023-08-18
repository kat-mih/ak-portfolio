import React from "react";
import "./Tariff.css";

const Tariff = ({ name, content }) => {
  return (
    <div className="tariff">
      <div className="tariff__header">{name}</div>
      <div className="tariff__body">
        {content}
        <button className="tariff__body-btn">
          Напиши мені, щоб дізнатися ціну
        </button>
      </div>
    </div>
  );
};

export default Tariff;
