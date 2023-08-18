import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SuccesMessage from "./SuccesMessage";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const [openMessage, setOpenMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cuxwltu",
        "template_po8zu46",
        form.current,
        "HbgQvioMD-_I9baSD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input
          className="contact-form__item"
          type="text"
          name="user_name"
          placeholder="Iм'я"
        />
        <input
          className="contact-form__item"
          type="email"
          name="user_email"
          placeholder="Email"
        />
        <input
          className="contact-form__item"
          type="phone"
          name="user_phone"
          placeholder="Телефон"
        />
        <textarea
          className="contact-form__item"
          name="message"
          placeholder="Введи своє повідомлення тут..."
          rows={5}
        />
        <input
          className="contact-form__btn"
          type="submit"
          value="Відправити"
          onClick={() => setOpenMessage(true)}
        />
      </form>
      <SuccesMessage
        open={openMessage}
        onClose={() => {
          setOpenMessage(false);
        }}
      />
    </>
  );
};

export default ContactForm;
