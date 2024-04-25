import React from "react";
import { Container } from "./styles";
import Link from "next/link";

interface IProps {
  image: string;
  period: string;
  techs: Array<string>;
  name: string;
  description: string;
  index: string;
}

const BoxProject = ({
  description,
  image,
  name,
  period,
  techs,
  index,
}: IProps) => {
  return (
    <Link href={`project/${index}`}>
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
    </Link>
  );
};

export default BoxProject;
