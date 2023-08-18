import React, { useState } from "react";
import CardMore from "./CardMore";
import "./Card.css";

const Card = () => {
  const [openMore, setOpenMore] = useState(false);

  return (
    <>
      <div className="card">
        <header className="card__header">Пудрові брови</header>
        <div className="card__body">
          Курс в форматі онлайн уроків 8 основних уроків у записі + додаткові
          матеріали (гайди, чек-лист, графічні зображення) <br />
          <span>
            Додатковий урок - "Якісна зйомка робіт на телефон та обробка фото"
          </span>
          <CardMore open={openMore} />
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
