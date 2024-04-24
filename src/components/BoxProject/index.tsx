import React from "react";
import { Container } from "./styles";

interface IProps {
  image: string;
  period: string;
  techs: Array<string>;
  name: string;
  description: string;
}

const BoxProject = ({ description, image, name, period, techs }: IProps) => {
  return (
    <Container>
      <img src={image} alt="" />
      <div className="head">
        <span>{period}</span>
        <div className="techs">
          {techs.map((imgTech, index) => (
            <img src={imgTech} alt="" key={index} />
          ))}
        </div>
      </div>

      <h3>{name}</h3>
      <p>{description}</p>
    </Container>
  );
};

export default BoxProject;
