import React from "react";
import "../Styles/Footer.css";
import Git from "../Img/github.png";
import Gmail from "../Img/email.png";
import Linkedin from "../Img/linkedin.png";

export default function Footer() {
  return (
    <div className="footer__container">
      <p className="p__footer">ENCUENTRAME EN:</p>

      <div className="footer__links">
        <a href="https://www.linkedin.com/in/pablo-daniel-iriarte-4478a6206/">
          <img className="footer__item2" src={Linkedin} alt="linkedin"></img>
        </a>

        <a
          href="mailto: pablodan.dev@gmail.com"
          className="btn__email"
          rel="noreferrer"
        >
          <img className="footer__item1" src={Gmail} alt="gmail"></img>
        </a>

        <a href="https://github.com/PabloDan94">
          <img className="footer__item3" src={Git} alt="github"></img>
        </a>
      </div>
    </div>
  );
}
