import React from "react";
import { Container } from "./styles";

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <span>Larissa 2024.</span>

        <ul>
          <li>
            <a href="">GitHub</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
          <li>
            <a href="">Instagram</a>
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
