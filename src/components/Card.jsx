import React, { useState } from "react";
import CardMore from "./CardMore";
import "./Card.css";

const Card = ({ name, description, program }) => {
  const [openMore, setOpenMore] = useState(false);

  return (
    <>
      <div className="card">
        <header className="card__header">{name}</header>
        <div className="card__body">
          <div className="card__body-description">{description}</div>
          <CardMore program={program} open={openMore} />
          <button
            className="card__body-btn"
            onClick={() => setOpenMore(!openMore)}>
            {!openMore ? "Дізнатися більше" : "Закрити"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
