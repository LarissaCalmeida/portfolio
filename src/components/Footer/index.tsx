import React from "react";
import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <span>Feito com bastante 💙 e um pouquin de ☕.</span>

        <ul>
          <li>
            <a href="https://github.com/LarissaCalmeida" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/larissa-calmeida/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/lari.code/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="#top">
              <img src="/arrow_footer.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
