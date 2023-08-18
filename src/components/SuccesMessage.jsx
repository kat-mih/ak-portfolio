import React from "react";
import "./SuccessMessage.css";
import close from "../assets/close.png";

const SuccesMessage = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="message">
        <button className="message__btn" onClick={onClose}>
          <img src={close} alt="close" />
        </button>
        <div className="message__content">
          <p>
            Дякую за повідомлення! <br /> Я зв'яжуся з тобою якнайшвидше. <br />{" "}
            Чудового дня, Аня ☀️
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccesMessage;
