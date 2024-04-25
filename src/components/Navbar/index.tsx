import Link from "next/link";
import { Container } from "./styles";
import { useState } from "react";

const Navbar = ({ id }: any) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Container id={id} menuActive={isActive}>
      <div className="wrapper">
        <img src="/logo.png" alt="Logo" />

        <nav>
          <ul>
            <li>
              <Link href="/#top">Home</Link>
            </li>
            <li>
              <Link href="/#about-me">Sobre mim</Link>
            </li>
            <li>
              <Link href="/#projects">Projetos</Link>
            </li>
            <li>
              <Link href="/#contact">Contatos</Link>
            </li>
          </ul>
        </nav>

        <div
          className="menu"
          onClick={() => {
            setIsActive((prev) => !prev);
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="drop">
          <ul>
            <li
              onClick={() => {
                setIsActive((prev) => !prev);
              }}
            >
              <Link href="/#top">Home</Link>
            </li>
            <li
              onClick={() => {
                setIsActive((prev) => !prev);
              }}
            >
              <Link href="/#about-me">Sobre mim</Link>
            </li>
            <li
              onClick={() => {
                setIsActive((prev) => !prev);
              }}
            >
              <Link href="/#projects">Projetos</Link>
            </li>
            <li
              onClick={() => {
                setIsActive((prev) => !prev);
              }}
            >
              <Link href="/#contact">Contatos</Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
