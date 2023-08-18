import React from "react";
import "./CardMore.css";

import star from "../assets/star.png";
import circle from "../assets/circle.png";
import Tariff from "./Tariff";

const CardMore = ({ open }) => {
  const modules = [
    {},
    {},
    {},
  ]

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
        {modules.map(module => <li className="card-more__content-item">
          {module.name}
          <ul>
            <li className="card-more__content-item__resultat">
              {module.resultat}
            </li>
          </ul>
          {if module.additional}
          <div>Додаткові матеріал:</div>
          <ul>
            <li className="card-more__content-item__additional">
              {module.additional}
            </li>
          </ul>
        </li>)}
        <li className="card-more__content-item">
          Машинки для ПМ, їх особливості
          <ul>
            <li className="card-more__content-item__resultat">
              Вміння правильно підбирати апарат для себе
            </li>
          </ul>
          <div>Додаткові матеріал:</div>
          <ul>
            <li className="card-more__content-item__additional">
              Гайд про голки
            </li>
          </ul>
        </li>
        <li className="card-more__content-item">
          Пігментологія та колористика
          <ul>
            <li className="card-more__content-item__resultat">
              Правильно підібраний колір пігменту під типаж клієнта
            </li>
          </ul>
          <div>Додаткові матеріал:</div>
          <ul>
            <li className="card-more__content-item__additional">
              Чек-лист "Улюблені мікси пігментів"
            </li>
          </ul>
        </li>
        <li className="card-more__content-item">
          Ескіз
          <ul>
            <li className="card-more__content-item__resultat">
              Чистий і правильно побудований ескіз за 15 хвилин
            </li>
          </ul>
          <div>Додаткові матеріал:</div>
          <ul>
            <li className="card-more__content-item__additional">
              Гайд про інструменти, які використовую при побудові ескіза
            </li>
          </ul>
        </li>
        <li className="card-more__content-item">
          Правильний штрих
          <ul>
            <li className="card-more__content-item__resultat">
              Правильне вкладання пігменту
            </li>
          </ul>
        </li>
        <li className="card-more__content-item">
          Типи шкіри і як з ними працювати
          <ul>
            <li className="card-more__content-item__resultat">
              Максимальне приживлення пігменту на будь-якому типі шкіри
            </li>
          </ul>
        </li>
        <li className="card-more__content-item">
          Анестезія та протипоказання
          <ul>
            <li className="card-more__content-item__resultat">
              Правильно підібрана анестезія
            </li>
          </ul>
          <div>Додаткові матеріал:</div>
          <ul>
            <li className="card-more__content-item__additional">
              Презентація про види анестезії
            </li>
          </ul>
        </li>
        <li className="card-more__content-item">
          Підготовка робочого місця та інструментів. Стерилізація та дезінфекція
          <ul>
            <li className="card-more__content-item__resultat">
              Основні правила безпеки майстра
            </li>
          </ul>
        </li>
        <li className="card-more__content-item">
          Демонстрація роботи на моделі
          <ul>
            <li className="card-more__content-item__resultat">
              Розуміння робочого процесу від А до Я з наглядним кінцевим
              результатом
            </li>
          </ul>
        </li>
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
