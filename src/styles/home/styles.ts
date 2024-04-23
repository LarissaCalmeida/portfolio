import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    margin-top: 5rem;
    flex-wrap: wrap;
    gap: 1rem;
    position: relative;

    @media screen and (max-width: 1290px) {
      width: 90%;
      text-align: center;
    }

    @media screen and (max-width: 1215px) {
      justify-content: center;
    }
  }
`;

export const ContainerSocialMediaHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
  position: absolute;
  left: 2em;

  .text {
    transform: rotate(-90deg);
  }

  .line {
    width: 1px;
    height: 83px;
    background-color: #fff;
    margin-bottom: 2rem;
  }

  .icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const ContainerTextHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media screen and (max-width: 1215px) {
    align-items: center;
  }

  .title {
    background: -webkit-linear-gradient(0deg, #9955e8 -10%, #7bffaf 30%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font: ${(props) => props.theme.fonts.hs};
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }

  .cursor {
    margin-bottom: 1rem;
  }

  .container-title {
    display: flex;
    align-items: end;
    justify-content: end;
  }

  .subtitle {
    font: ${(props) => props.theme.fonts.h2};
    margin-bottom: 1rem;
  }

  .paragraph {
    font: ${(props) => props.theme.fonts.paragraph};
    max-width: 592px;
    margin-bottom: 2rem;
  }

  .button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.button_primary};
    font: ${(props) => props.theme.fonts.button};
    color: #fff;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.button_primary_hover};
    }
  }
`;

export const ContainerImageHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  @media screen and (max-width: 1215px) {
    align-items: center;
  }

  @media screen and (max-width: 560px) {
    img:first-child {
      width: 100%;
    }
  }
`;

export const SectionAboutMe = styled.section`
  width: 90%;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.background_light};
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media screen and (max-width: 416px) {
    width: 100%;
    padding: 4rem 1rem;
  }

  .container {
    display: flex;
    max-width: 1280px;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 1290px) {
      width: 90%;
      text-align: center;
    }

    @media screen and (max-width: 1215px) {
      justify-content: center;
      /* flex-direction: column-reverse; */
    }

    @media screen and (max-width: 560px) {
      & > img:first-child {
        width: 100%;
      }
    }

    .text {
      @media screen and (max-width: 1215px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* flex-direction: column-reverse; */
      }
      .icons {
        margin-bottom: 2rem;
      }

      .title {
        font: ${(props) => props.theme.fonts.section_title};
        margin-bottom: 1rem;
        color: ${(props) => props.theme.colors.font_secondary};
      }

      .subtitle {
        font: ${(props) => props.theme.fonts.h2};
        margin-bottom: 1rem;
        display: block;
      }

      .paragraph {
        font: ${(props) => props.theme.fonts.paragraph};
        max-width: 592px;
        margin-bottom: 2rem;
      }

      .button {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.8rem 2rem;
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors.button_primary};
        font: ${(props) => props.theme.fonts.button};
        color: #fff;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: ${(props) =>
            props.theme.colors.button_primary_hover};
        }
      }
    }
  }
`;

export const SectionProjects = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1280px;
    justify-content: center;
    margin: 5rem 0;
    @media screen and (max-width: 1290px) {
      width: 90%;
    }
  }
  .title {
    font: ${(props) => props.theme.fonts.section_title};
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.font_secondary};
  }

  .subtitle {
    font: ${(props) => props.theme.fonts.h2};
    margin-bottom: 1rem;
    display: block;
    text-align: center;
  }

  .button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.button_secondary};
    font: ${(props) => props.theme.fonts.button};
    color: #fff;
    transition: all 0.3s ease-in-out;
    margin-top: 4rem;

    &:hover {
      background-color: ${(props) => props.theme.colors.button_secondary_hover};
    }
  }
  .projects {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 4rem;
    position: relative;
    align-items: center;
    justify-content: center;

    .star_top {
      position: absolute;
      top: -6rem;
      left: -4rem;
    }

    .star_bottom {
      position: absolute;
      bottom: -8rem;
      right: -5rem;
    }

    .project {
      width: 384px;
      height: 344px;
      padding: 24px;
      background-color: ${(props) => props.theme.colors.background_light};
      border-radius: 16px;
      @media screen and (max-width: 416px) {
        width: 90%;

        img {
          width: 100%;
        }
      }

      .head {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 1rem;

        span {
          font: ${(props) => props.theme.fonts.period_project};
        }
      }

      h3 {
        font: ${(props) => props.theme.fonts.title_project};
        margin-top: 0.5rem;
      }

      p {
        font: ${(props) => props.theme.fonts.paragraph};
      }
    }
  }
`;

export const SectionContactMe = styled.section`
  width: 90%;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.background_light};
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 416px) {
    width: 100%;
    padding: 4rem 1rem;
  }

  .container {
    display: flex;
    max-width: 1280px;
    gap: 2rem;
    justify-content: space-between;
    /* align-items: center; */
    flex-wrap: wrap;
    @media screen and (max-width: 1290px) {
      width: 90%;
    }

    .contact {
      width: 50%;
      .title {
        font: ${(props) => props.theme.fonts.section_title};
        margin-bottom: 1rem;
        color: ${(props) => props.theme.colors.font_secondary};
        margin-top: 2rem;
      }

      .subtitle {
        font: ${(props) => props.theme.fonts.h2};
        margin-bottom: 1rem;
        display: block;
      }

      .paragraph {
        font: ${(props) => props.theme.fonts.paragraph};
        max-width: 592px;
        margin-bottom: 2rem;

        span {
          color: ${(props) => props.theme.colors.font_secondary};
        }
      }

      ul li {
        display: flex;
        align-items: center;
        gap: 1rem;

        a {
          font: ${(props) => props.theme.fonts.paragraph};
          color: #fff;
          transition: all 0.3s ease-in-out;

          &:hover {
            color: ${(props) => props.theme.colors.font_secondary};
          }
        }
      }

      .icons {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 2rem;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      width: calc(50% - 2rem);
      gap: 1rem;

      input {
        height: 70px;
        padding: 1rem;
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors.background};
        border: none;

        &::placeholder {
          font-size: 18px;
          color: #eeeeee;
          font-family: "Poppins", sans-serif;
        }
      }

      textarea {
        height: 298px;
        padding: 1rem;
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors.background};
        border: none;
        resize: none;

        &::placeholder {
          font-size: 18px;
          color: #eeeeee;
          font-family: "Poppins", sans-serif;
        }
      }

      .button {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.8rem 2rem;
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors.button_primary};
        font: ${(props) => props.theme.fonts.button};
        color: #fff;
        transition: all 0.3s ease-in-out;
        justify-content: center;

        &:hover {
          background-color: ${(props) =>
            props.theme.colors.button_primary_hover};
        }
      }
    }
  }

  @media screen and (max-width: 1215px) {
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */

    .form {
      display: flex;
      flex-direction: column;
      width: 100% !important;
      gap: 1rem;
    }

    .contact {
      width: 100% !important;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  width: 100%;
  padding: 2rem 0;

  .container {
    display: flex;
    max-width: 1280px;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 1290px) {
      width: 90%;
    }

    @media screen and (max-width: 416px) {
      justify-content: center;
    }

    span {
      font: ${(props) => props.theme.fonts.period_project};
    }

    ul {
      display: flex;
      gap: 2rem;
      li {
        a {
          color: #eee;
          font: ${(props) => props.theme.fonts.period_project};
        }
        img {
          margin-left: 1rem;
        }
      }
    }
  }
`;
