import React from "react";
import ContactForm from "../components/ContactForm";
import "./Contact.css";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
import tiktok from "../assets/tiktok.png";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      {/* <h2 className="contact__header">
        Cконтактуйся <span>зi</span> мною
      </h2> */}
      <div className="contact__content">
        <div className="contact__content-side"></div>
        <ContactForm />
      </div>
      <div className="contact__social">
        <a
          className="contact__social__item"
          href="https://www.instagram.com/"
          target="blank">
          <img src={instagram} alt="instagram" />
        </a>
        <a
          className="contact__social__item"
          href="https://www.facebook.com/"
          target="blank">
          <img src={facebook} alt="facebook" />
        </a>
        <a
          className="contact__social__item"
          href="https://web.telegram.org/k/"
          target="blank">
          <img src={telegram} alt="telegram" />
        </a>
        <a
          className="contact__social__item"
          href="https://web.telegram.org/k/"
          target="blank">
          <img src={tiktok} alt="tiktok" />
        </a>
      </div>
      <p className="contact__copyright">Made with love ❤️ 2023</p>
    </div>
  );
};

export default Contact;
