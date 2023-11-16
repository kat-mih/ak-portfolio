import React from "react";
import "./CardMore.css";

import Tariff from "./Tariff";

const CardMore = ({ program }) => {
  return (
    <>
      <div className="card-more">
        {program.online ? (
          <>
            <div className="card-more__content">
              <p className="card-more__content-header">Онлайн-підготовка:</p>
              <p className="card-more__online-description">
                {program.online.description}
              </p>
            </div>
          </>
        ) : (
          ""
        )}
        {program.offline ? (
          <>
            <div className="card-more__content">
              <p className="card-more__offline">{program.offline.name}</p>

              <div>
                <p className="card-more__content-header">Програма курсу:</p>
                <ul className="card-more__offline-program">
                  {program.offline.program.map((item, index) => (
                    <li
                      className="card-more__offline-program__item"
                      key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="card-more__offline-schedule">
                  {program.offline.schedule.map((day, index) => (
                    <li
                      className="card-more__offline-schedule__item"
                      key={index}>
                      <span>{index + 1} день</span>
                      {day}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="card-more__content-header">Формат курсу:</p>
                <ul>
                  {program.offline.formats.map((format, index) => (
                    <li className="card-more__offline-format__item" key={index}>
                      {format}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul>
                  {program.offline.add.map((item, index) => (
                    <li
                      className="card-more__offline-additional__item"
                      key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="card-more__content-header">Бонуси:</p>
                <ul>
                  {program.offline.bonuses.map((bonus, index) => (
                    <li className="card-more__offline-bonus__item" key={index}>
                      {bonus}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {program.additional ? (
          <>
            <div className="card-more__content">
              <p className="card-more__additional">
                {program.additional.description}
              </p>
              <p className="card-more__additional">
                {program.additional.schedule}
              </p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      {/* <div className="tariffs">
        {tarrifs.map((tarif) => (
          <Tariff key={tarif.name} name={tarif.name} content={tarif.content} />
        ))}
      </div> */}
    </>
  );
};

export default CardMore;
