import React from "react";

import about from "../assets/about.jpeg";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <h2 className="about__header">
        Про <span>мене</span>
      </h2>
      <div className="about__content">
        <div className="about__content-img">
          <img src={about} alt="about me" />
        </div>
        <div className="about__content-text">
          Я - Анна Капітанюк. Власниця студії краси LICO у Варшаві. Досвід
          роботи у галузі перманентного макіяжу — 4 роки. Більш ніж 1000
          задоволених клієнтів. Автор навчальних курсів з ПМ. Пройшла шлях від
          майстра, який працює вдома, до власниці салону у Варшаві та тренера ПМ
          і ділюсь досвідом зі своїми учнями. Збудувала команду сильних
          майстрів. Розвиваюсь не тільки професійно, а й прокачую себе як
          особистість — знаю психологію клієнта й безперервно навчаюсь.
        </div>
      </div>
    </div>
  );
};

export default About;
