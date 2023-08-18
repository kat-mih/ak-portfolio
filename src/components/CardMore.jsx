import React from "react";
import "./CardMore.css";

import star from "../assets/star.png";
import circle from "../assets/circle.png";
import Tariff from "./Tariff";

const CardMore = ({ open }) => {
  const modules = [
    {
      name: "Машинки для ПМ, їх особливості",
      result: "Вміння правильно підбирати апарат для себе",
      additional: "Гайд про голки",
    },
    {
      name: "Пігментологія та колористика",
      result: "Правильно підібраний колір пігменту під типаж клієнта",
      additional: `Чек-лист "Улюблені мікси пігментів"`,
    },
    {
      name: "Ескіз",
      result: "Чистий і правильно побудований ескіз за 15 хвилин",
      additional: "Гайд про інструменти, які використовую при побудові ескіза",
    },
    {
      name: "Правильний штрих",
      result: "Правильне вкладання пігменту",
    },
    {
      name: "Типи шкіри і як з ними працювати",
      result: "Максимальне приживлення пігменту на будь-якому типі шкіри",
    },
    {
      name: "Анестезія та протипоказання",
      result: "Правильно підібрана анестезіяи",
      additional: "Презентація про види анестезії",
    },
    {
      name: "Підготовка робочого місця та інструментів. Стерилізація та дезінфекція",
      result: "Основні правила безпеки майстра",
    },
    {
      name: "Демонстрація роботи на моделі",
      result:
        "Розуміння робочого процесу від А до Я з наглядним кінцевим результатом",
    },
  ];

  const tarrifs = [
    {
      name: "Пакет 1",
      content: "8 уроків в записі з доступом до перегляду на 2 місяці",
    },
    {
      name: "Пакет 2",
      content:
        "8 уроків в записі з доступом до перегляду на 2 місяці + відпрацювання онлайн з викладачем-експертом (1 модель)",
    },
    {
      name: "Пакет 3",
      content:
        "8 уроків в записі з доступом до перегляду на 2 місяці + відпрацювання офлайн з експертом у Варшаві (2 моделі - 1 день)",
    },
  ];

  if (!open) return null;
  return (
    <>
      <ul className="card-more__content">
        {modules.map((module) => (
          <li key={module.name} className="card-more__content-item">
            {module.name}
            <ul>
              <li className="card-more__content-item__resultat">
                {module.result}
              </li>
            </ul>
            {module.additional ? (
              <>
                <div>Додаткові матеріал:</div>
                <ul>
                  <li className="card-more__content-item__additional">
                    {module.additional}
                  </li>
                </ul>
              </>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
      <div className="tariffs">
        {tarrifs.map((tarif) => (
          <Tariff name={tarif.name} content={tarif.content} />
        ))}
        {/* <Tariff name={one.name} content={one.content} />
        <Tariff name={second.name} content={second.content} />
        <Tariff name={third.name} content={third.content} /> */}
      </div>
    </>
  );
};

export default CardMore;
