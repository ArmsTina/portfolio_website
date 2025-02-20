import React from "react";
import Container from "react-bootstrap/Container";
import "../scss/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer({ darkMode }) {
  return (
    <Container
      fluid
      className={`footer ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <a
        href="https://github.com/ArmsTina"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/dongyoung1999/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
      <a
        href="https://www.instagram.com/arms.tina/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </a>
      <p>© Dongyoung Yang</p>
    </Container>
  );
}

export default Footer;
