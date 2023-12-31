import Card from "../components/Card";
import "./Courses.css";
import Fade from "react-reveal/Fade";

const Courses = () => {
  const coursesInfo = [
    {
      name: "Пудрові брови та Акварельні губи. База",
      description:
        "Розпочни зі мною свій шлях у світі перманентного макіяжу - ти навчишся актуальним технікам створення перманентних брів і губ та отримаєш прибуткову професію в сфері б'юті",
      program: {
        online: {
          description:
            "За 10 днів до старту навчання отримаєш теоретичні матеріали і міні-уроки, які підготують тебе до очного курсу",
        },
        offline: {
          name: "5 днів офлайн навчання",
          program: [
            "Все про організацію робочого місця",
            "Гігієна та дезинфекція в роботі",
            "Розбір машинок. Яку для себе обрати?",
            "Пігменти",
            "Ідеальний ескіз",
            "Тренування на латексі",
          ],
          schedule: [
            " - Теорія. Відпрацювання  штрихів на латексі",
            " - Показова модель (Брови). Модель на відпрацювання",
            " - 2 моделі на відпрацювання (Брови)",
            " - Показова модель (Губи). Модель на відпрацювання",
            " - 2 моделі на відпрацювання (Губи)",
          ],
          formats: ["Груповий (2 особи)", "Індивідуальний"],
          add: [
            "Моделей для відпрацювання надаємо",
            "Друкований зошит з теоретичними матеріалами",
            "Іменний сертифікат",
          ],
          bonuses: [
            "До 2х місяців після навчання маєш можливість відпрацювати корекцію перманента, який був зроблений на курсі",
            "Урок зі створення фото/відео, які продають",
            "Урок з обробки фото/відео",
          ],
        },
      },
    },
    {
      name: "Пудрові брови, Акварельні губи та Міжвійка. База",
      description:
        "Опануєш сучасну авторську методику створення одразу трьох зон - брови, губи та міжвійка. Поринь у навчання на поглибленому базовому курсі  - стань універсальним майстром перманентного макіяжу",
      program: {
        online: {
          description:
            "За 10 днів до старту навчання отримаєш теоретичні матеріали і міні-уроки, які підготують тебе до очного курсу",
        },
        offline: {
          name: "6 днів офлайн навчання",
          program: [
            "Все про організацію робочого місця",
            "Гігієна та дезинфекція в роботі",
            "Розбір машинок. Яку для себе обрати?",
            "Пігменти",
            "Ідеальний ескіз",
            "Тренування на латексі",
          ],
          schedule: [
            " - Теорія. Відпрацювання  штрихів на латексі",
            " - Показова модель (Брови). Модель на відпрацювання",
            " - 2 моделі на відпрацювання (Брови)",
            " - Показова модель (Губи). Модель на відпрацювання",
            " - 2 моделі на відпрацювання (Губи)",
            " - Показова модель (Міжвійка). 2 моделі на відпрацювання (Міжвійка).",
          ],
          formats: ["Груповий (2 особи)", "Індивідуальний"],
          add: [
            "Моделей для відпрацювання надаємо",
            "Друкований зошит з теоретичними матеріалами",
            "Іменний сертифікат",
          ],
          bonuses: [
            "До 2х місяців після навчання маєш можливість відпрацювати корекцію перманента, який був зроблений на курсі",
            "Урок зі створення фото/відео, які продають",
            "Урок з обробки фото/відео",
          ],
        },
      },
    },
    {
      name: "Курс підвищення кваліфікації",
      description:
        "Курс призначений для майстрів, які хочуть поліпшити свої навички, вдосконалити техніку роботи.",
      program: {
        additional: {
          description:
            "Курс призначений для майстрів, які хочуть поліпшити свої навички, вдосконалити техніку роботи. Індивідуальний курс, після якого в тебе не залишиться жодних питань - ми розберемо всі твої помилки і прогалини.",
          schedule:
            "Графік проведення курсу підбираємо індивідуально після консультації - кількість днів залежить від кількості зон для розбору",
        },
      },
    },
  ];

  return (
    <div id="courses" className="courses">
      <Fade left>
        <h2 className="courses__header">
          Hавчайся <span>у</span> мене
        </h2>
      </Fade>
      <div className="courses__cards">
        {coursesInfo.map((course) => (
          <Fade bottom key={course.name}>
            <Card
              key={course.name}
              name={course.name}
              description={course.description}
              program={course.program}
            />
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Courses;
