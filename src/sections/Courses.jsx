import React from "react";
import Card from "../components/Card";
import "./Courses.css";

const Courses = () => {
  const coursesInfo = [
    {
      name: "Пудрові брови та Акварельні губи. База",
      description:
        "Розпочни зі мною свій шлях у світі перманентного макіяжу - ти навчишся актуальним технікам створення перманентних брів і губ та отримаєш прибуткову професію в сфері б'юті",
    },
    {
      name: "Пудрові брови, Акварельні губи та Міжвійка. База",
      description:
        "Опануєш сучасну авторську методику створення одразу трьох зон - брови, губи та міжвійка. Поринь у навчання на поглибленому базовому курсі  - стань універсальним майстром перманентного макіяжу",
    },
    {
      name: "Курс підвищення кваліфікації",
      description:
        "Курс призначений для майстрів, які хочуть поліпшити свої навички, вдосконалити техніку роботи.",
    },
  ];

  return (
    <div id="courses" className="courses">
      <h2 className="courses__header">
        Hавчайся <span>у</span> мене
      </h2>
      <div className="courses__cards">
        {coursesInfo.map((course) => (
          <Card
            key={course.name}
            name={course.name}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
