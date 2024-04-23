import styled from "styled-components";

interface IProps {
  menuActive: boolean;
}

export const Container = styled.div<IProps>`
  padding: 2rem 2.5rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    max-width: 1280px;
  }

  nav ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 36px;
    max-width: 1280px;

    li a {
      color: ${(props) => props.theme.colors.font_primary};
      font: ${(props) => props.theme.fonts.paragraph};
      list-style: none;
    }
  }

  .menu,
  .drop {
    display: none;
  }

  @media screen and (max-width: 720px) {
    nav {
      display: none;
    }

    .menu {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      cursor: pointer;

      .line {
        content: "";
        width: 32px;
        height: 2px;
        background-color: #eee;
        position: relative;
        transition: all 0.3s ease-in-out;
      }

      .line:nth-child(1) {
        transform: ${(props) =>
          props.menuActive && "translateY (calc(0.5rem + 2px))"};
        transform: ${(props) => props.menuActive && "rotate(50deg)"};
        transform-origin: ${(props) =>
          props.menuActive && "calc(0.5rem + 2px)"};
      }
      .line:nth-child(2) {
        transform: ${(props) => props.menuActive && "rotate(-50deg)"};
        transform-origin: ${(props) =>
          props.menuActive && "calc(0.5rem + 2px)"};
      }
      .line:nth-child(3) {
        display: ${(props) => (props.menuActive ? "none" : "initial")};
        /* transform-origin: 0px; */
      }
    }

    .drop {
      position: fixed;
      display: flex;
      width: 100vw;
      height: calc(100vh - 5rem);
      background-color: ${(props) => props.theme.colors.background};
      padding: 2rem;
      left: 0;
      top: 5.5rem;
      z-index: 5;
      left: -100vw;
      transition: all 0.3s ease-in-out;
      transform: ${(props) => props.menuActive && "translateX(100vw)"};

      ul {
        display: flex;
        flex-direction: column;
        /* gap: 36px; */
        max-width: 1280px;
        gap: 8px;

        li a {
          color: ${(props) => props.theme.colors.font_primary};
          font: ${(props) => props.theme.fonts.paragraph};
          list-style: none;
          padding: 1rem 0;
          display: block;
          text-transform: uppercase;
        }
      }
    }
  }
`;
