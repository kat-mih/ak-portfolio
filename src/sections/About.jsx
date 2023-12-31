import React from "react";
import Fade from "react-reveal/Fade";
import about from "../assets/about.jpeg";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <Fade left>
        <h2 className="about__header">
          Про <span>мене</span>
        </h2>
      </Fade>
      <div className="about__content">
        <Fade>
          <div className="about__content-img">
            <img src={about} alt="about me" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="about__content-text">
            Привіт! Я - <span>Аня Капітанюк</span>
            <br />
            Моя місія - навчати і ділитися досвідом <br />
            Надихаю та мотивую своїх учнів досягати успіху - з легкістю та в
            кайф <br />
            Засновниця школи-студії <span>LICO</span> у Варшаві <br />
            <span>10 років</span> в б'юті та більш ніж{" "}
            <span>5000 задоволених клієнтів</span> <br />
            Проводжу базові курси та підвищення кваліфікації для майстрів
            перманентного макіяжу <br />
            Впевнена в тому, що кожна мрія може стати реальністю - потрібно лише
            діяти
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
