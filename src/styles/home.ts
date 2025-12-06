import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  background-image: url("/hero_section.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  animation: fadeIn 0.8s ease-in-out;

  .wrapper-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    width: 100%;
    max-width: 1280px;
    margin-top: 10rem;
    flex-wrap: wrap;
    gap: 1rem;
    position: relative;
    padding: 0 2rem;

    @media screen and (max-width: 1290px) {
      width: 90%;
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      margin-top: 6rem;
      padding: 0 1rem;
    }

    @media screen and (max-width: 480px) {
      margin-top: 5rem;
    }
  }
`;

export const SectionServices = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url("/ellipse_bg.png") no-repeat bottom right;
  padding: 8rem 0;
  animation: fadeInUp 0.8s ease-out 0.5s both;

  @media screen and (max-width: 768px) {
    padding: 4rem 0;
  }

  .container-title {
    text-align: center;
    margin-bottom: 3rem;
  }

  .title {
    font: ${(props) => props.theme.fonts.section_title};
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.font_secondary};

    @media screen and (max-width: 768px) {
      font-size: 32px;
    }

    @media screen and (max-width: 480px) {
      font-size: 24px;
    }
  }

  .subtitle {
    font: normal normal 400 42px/120% Inter, sans-serif;
    max-width: 592px;
    margin-bottom: 1rem;
    display: block;
    margin: 0 auto 1rem;

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }

    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    gap: 2rem;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 2rem;

    @media screen and (max-width: 1290px) {
      width: 90%;
      text-align: center;
    }

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }

    .container-services {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;

      div {
        display: flex;
        width: 100%;
        border: 1px solid #1e1e21;
        padding: 3rem 2rem;
        border-radius: 8px;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        position: relative;
        overflow: hidden;
        animation: fadeInUp 0.6s ease-out both;

        &:nth-child(1) {
          animation-delay: 0.6s;
        }
        &:nth-child(2) {
          animation-delay: 0.7s;
        }
        &:nth-child(3) {
          animation-delay: 0.8s;
        }
        &:nth-child(4) {
          animation-delay: 0.9s;
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.03),
            transparent
          );
          transition: left 0.5s;
        }

        &:hover {
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

          &::before {
            left: 100%;
          }

          span {
            color: ${(props) => props.theme.colors.font_secondary};
          }

          p {
            color: #fff;
            transform: scale(1.05);
          }
        }

        @media screen and (max-width: 768px) {
          padding: 2rem 1.5rem;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }

        span {
          font-size: 12px;
          font-weight: 300;
          font-family: "Inter", sans-serif;
          color: #929292;
          transition: color 0.3s ease;

          @media screen and (max-width: 480px) {
            font-size: 10px;
          }
        }

        p {
          font-size: 36px;
          font-weight: 400;
          font-family: "Inter", sans-serif;
          color: #fff;
          transition: all 0.3s ease;

          @media screen and (max-width: 768px) {
            font-size: 24px;
          }

          @media screen and (max-width: 480px) {
            font-size: 18px;
          }
        }
      }
    }

    @media screen and (max-width: 560px) {
      & > img:first-child {
        width: 100%;
      }
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
  align-items: center;
  text-align: center;
  max-width: 720px;
  animation: fadeInUp 1s ease-out 0.2s both;

  @media screen and (max-width: 1215px) {
    align-items: center;
  }

  .title {
    background: -webkit-linear-gradient(0deg, #ffffff 10%, #767585 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font: normal normal 700 40px/56px Inter, sans-serif;
    line-height: 2.5rem;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;

    @media screen and (max-width: 768px) {
      font-size: 32px;
      line-height: 2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 24px;
      line-height: 1.5rem;
    }
  }

  .cursor {
    margin-bottom: 1rem;
    animation: pulse 1.5s ease-in-out infinite;
  }

  .container-title {
    display: flex;
    align-items: end;
    justify-content: end;
  }

  .subtitle {
    font-size: 16px;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    color: #fff;
    margin-bottom: 1rem;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
      font-size: 12px;
    }
  }

  .paragraph {
    font: ${(props) => props.theme.fonts.paragraph};
    max-width: 592px;
    margin-bottom: 2rem;
    line-height: 1.6;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media screen and (max-width: 480px) {
      flex-direction: column;
      width: 100%;
      gap: 1rem;
    }
  }

  .button {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    font: ${(props) => props.theme.fonts.button};
    color: #fff;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    transform: translateY(0);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      transition: left 0.5s;
    }

    &:hover::before {
      left: 100%;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: translateY(0);
    }

    img {
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: translateX(5px);
    }

    @media screen and (max-width: 480px) {
      width: 100%;
      justify-content: center;
      padding: 1rem 2rem;
    }
  }

  .button.primary {
    background-color: ${(props) => props.theme.colors.button_primary};

    &:hover {
      background-color: ${(props) => props.theme.colors.button_primary_hover};
    }
  }

  .button.secondary {
    background-color: ${(props) => props.theme.colors.button_secondary};
    border: 1px solid #1e1e21;

    &:hover {
      background-color: ${(props) => props.theme.colors.button_secondary_hover};
      border-color: rgba(255, 255, 255, 0.2);
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

export const SectionCopy = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  border-top: 1px solid #1e1e21;
  border-bottom: 1px solid #1e1e21;
  padding: 2rem 0;
  max-width: 90%;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.3s both;

  span {
    transition: color 0.3s ease;
    cursor: default;

    &:hover {
      color: ${(props) => props.theme.colors.font_secondary};
    }
  }

  img {
    animation: float 3s ease-in-out infinite;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2) rotate(15deg);
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 95%;
    padding: 1.5rem 0;
    gap: 0.5rem;

    span {
      font-size: 12px;
    }

    img {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SectionAboutMe = styled.section`
  width: 90%;
  border-radius: 16px;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  animation: fadeInUp 0.8s ease-out 0.4s both;

  @media screen and (max-width: 768px) {
    width: 95%;
    padding: 3rem 1.5rem;
  }

  @media screen and (max-width: 416px) {
    width: 100%;
    padding: 2rem 1rem;
  }

  .container {
    display: flex;
    max-width: 1280px;
    gap: 3rem;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 1290px) {
      width: 90%;
      text-align: center;
    }

    @media screen and (max-width: 968px) {
      justify-content: center;
      flex-direction: column;
      gap: 2rem;
    }

    @media screen and (max-width: 560px) {
      & > img:first-child {
        width: 100%;
        max-width: 300px;
      }
    }

    img {
      transition: transform 0.5s ease;
      border-radius: 12px;

      &:hover {
        transform: scale(1.05) rotate(2deg);
      }
    }

    .text {
      flex: 1;
      min-width: 300px;

      @media screen and (max-width: 1215px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .icons {
        margin-bottom: 2rem;
        animation: fadeIn 1s ease-out 0.6s both;

        img {
          transition: transform 0.3s ease;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      .title {
        font: ${(props) => props.theme.fonts.section_title};
        margin-bottom: 1rem;
        color: ${(props) => props.theme.colors.font_secondary};
        transition: color 0.3s ease;

        @media screen and (max-width: 768px) {
          font-size: 32px;
        }

        @media screen and (max-width: 480px) {
          font-size: 24px;
        }
      }

      .subtitle {
        font: normal normal 400 42px/120% Inter, sans-serif;
        max-width: 592px;
        margin-bottom: 1rem;
        display: block;

        @media screen and (max-width: 768px) {
          font-size: 32px;
        }

        @media screen and (max-width: 480px) {
          font-size: 24px;
        }
      }

      .paragraph {
        font: ${(props) => props.theme.fonts.paragraph};
        max-width: 592px;
        margin-bottom: 2rem;
        line-height: 1.8;

        @media screen and (max-width: 768px) {
          font-size: 14px;
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
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transform: translateY(0);

        &:hover {
          background-color: ${(props) =>
            props.theme.colors.button_primary_hover};
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        &:active {
          transform: translateY(0);
        }
      }
    }
  }
`;

export const SectionHowWork = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url("/ellipse_bg_bottom.png") no-repeat top right;
  padding: 8rem 0;
  animation: fadeInUp 0.8s ease-out 0.6s both;

  @media screen and (max-width: 768px) {
    padding: 4rem 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    width: 100%;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .container-title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .title {
    font: ${(props) => props.theme.fonts.section_title};
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.font_secondary};

    @media screen and (max-width: 768px) {
      font-size: 32px;
    }

    @media screen and (max-width: 480px) {
      font-size: 24px;
    }
  }

  .subtitle {
    font: normal normal 400 42px/120% Inter, sans-serif;
    max-width: 592px;
    margin-bottom: 1rem;
    display: block;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }

    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
  }

  .container-steps {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 100%;
    margin-top: 4rem;

    @media screen and (max-width: 768px) {
      gap: 3rem;
      margin-top: 2rem;
    }
  }

  .container-step:nth-child(odd) {
    align-self: flex-start;
    animation: slideInLeft 0.8s ease-out both;

    @media screen and (max-width: 768px) {
      align-self: center;
      animation: fadeInUp 0.8s ease-out both;
    }
  }

  .container-step:nth-child(even) {
    align-self: flex-end;
    flex-direction: row-reverse;
    animation: slideInRight 0.8s ease-out both;

    @media screen and (max-width: 768px) {
      align-self: center;
      flex-direction: row;
      animation: fadeInUp 0.8s ease-out both;
    }
  }

  .container-step {
    display: flex;
    align-items: end;
    gap: 2rem;
    width: 100%;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    @media screen and (max-width: 768px) {
      flex-direction: column !important;
      align-items: center;
      gap: 1.5rem;
    }

    img {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    .icon {
      width: 70px;
      height: 70px;
      background-color: #1e1e21;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 20px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      flex-shrink: 0;

      @media screen and (max-width: 480px) {
        width: 60px;
        height: 60px;
        font-size: 18px;
      }
    }

    .step {
      flex-direction: column;
      gap: 1rem;
      border: 1px solid #1e1e21;
      padding: 2rem;
      border-radius: 8px;
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      max-width: 70%;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.03),
          transparent
        );
        transition: left 0.5s;
      }

      &:hover {
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        transform: translateY(-5px);

        &::before {
          left: 100%;
        }

        .icon {
          background-color: ${(props) => props.theme.colors.button_primary};
          transform: scale(1.1) rotate(5deg);
        }
      }

      @media screen and (max-width: 968px) {
        max-width: 85%;
      }

      @media screen and (max-width: 768px) {
        max-width: 100%;
        padding: 1.5rem;
      }

      h3 {
        font: normal normal 400 32px/120% Inter, sans-serif;
        margin-bottom: 1rem;
        transition: color 0.3s ease;

        @media screen and (max-width: 768px) {
          font-size: 24px;
        }

        @media screen and (max-width: 480px) {
          font-size: 20px;
        }
      }

      p {
        font: normal normal lighter 16px/120% Inter, sans-serif;
        line-height: 1.6;

        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
    }

    &:hover .icon {
      background-color: ${(props) => props.theme.colors.button_primary};
      transform: scale(1.1) rotate(5deg);
    }
  }
`;

export const SectionProjects = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeInUp 0.8s ease-out 0.7s both;

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1280px;
    justify-content: center;
    margin: 5rem 0;
    padding: 0 2rem;

    @media screen and (max-width: 1290px) {
      width: 90%;
    }

    @media screen and (max-width: 768px) {
      margin: 3rem 0;
      padding: 0 1rem;
    }
  }

  .title {
    font: ${(props) => props.theme.fonts.section_title};
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.font_secondary};

    @media screen and (max-width: 768px) {
      font-size: 32px;
    }

    @media screen and (max-width: 480px) {
      font-size: 24px;
    }
  }

  .subtitle {
    font: normal normal 400 42px/120% Inter, sans-serif;
    margin-bottom: 1rem;
    display: block;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }

    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
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
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    margin-top: 4rem;
    transform: translateY(0);

    &:hover {
      background-color: ${(props) => props.theme.colors.button_secondary_hover};
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    &:active {
      transform: translateY(0);
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
    width: 100%;

    @media screen and (max-width: 768px) {
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .star_top {
      position: absolute;
      top: -6rem;
      left: -4rem;
      animation: float 4s ease-in-out infinite;
      z-index: -1;

      @media screen and (max-width: 768px) {
        top: -4rem;
        left: -2rem;
        width: 60px;
        height: 60px;
      }
    }

    .star_bottom {
      position: absolute;
      bottom: -8rem;
      right: -5rem;
      animation: float 4s ease-in-out infinite 2s;
      z-index: -1;

      @media screen and (max-width: 768px) {
        bottom: -4rem;
        right: -2rem;
        width: 60px;
        height: 60px;
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
  animation: fadeInUp 0.8s ease-out 0.8s both;

  @media screen and (max-width: 768px) {
    width: 95%;
    padding: 3rem 1.5rem;
  }

  @media screen and (max-width: 416px) {
    width: 100%;
    padding: 2rem 1rem;
  }

  .container {
    display: flex;
    max-width: 1280px;
    gap: 3rem;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    @media screen and (max-width: 1290px) {
      width: 90%;
    }

    @media screen and (max-width: 968px) {
      gap: 2rem;
    }

    .contact {
      width: 50%;
      flex: 1;
      min-width: 300px;

      @media screen and (max-width: 968px) {
        width: 100%;
      }

      img {
        transition: transform 0.3s ease;
        margin-bottom: 1rem;

        &:hover {
          transform: scale(1.1) rotate(5deg);
        }
      }

      .title {
        font: ${(props) => props.theme.fonts.section_title};
        margin-bottom: 1rem;
        color: ${(props) => props.theme.colors.font_secondary};
        margin-top: 2rem;

        @media screen and (max-width: 768px) {
          font-size: 32px;
          margin-top: 1rem;
        }

        @media screen and (max-width: 480px) {
          font-size: 24px;
        }
      }

      .subtitle {
        font: ${(props) => props.theme.fonts.h2};
        margin-bottom: 1rem;
        display: block;

        @media screen and (max-width: 768px) {
          font-size: 18px;
        }
      }

      .paragraph {
        font: ${(props) => props.theme.fonts.paragraph};
        max-width: 592px;
        margin-bottom: 2rem;
        line-height: 1.8;

        @media screen and (max-width: 768px) {
          font-size: 14px;
        }

        span {
          color: ${(props) => props.theme.colors.font_secondary};
          transition: color 0.3s ease;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;

          &:hover {
            transform: translateX(5px);
          }

          img {
            transition: transform 0.3s ease;
          }

          &:hover img {
            transform: scale(1.2);
          }

          a {
            font: ${(props) => props.theme.fonts.paragraph};
            color: #fff;
            transition: all 0.3s ease-in-out;

            &:hover {
              color: ${(props) => props.theme.colors.font_secondary};
            }
          }
        }
      }

      .icons {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 2rem;

        a {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-block;

          img {
            transition: all 0.3s ease;
          }

          &:hover {
            transform: translateY(-5px) scale(1.1);

            img {
              filter: brightness(1.2);
            }
          }

          &:active {
            transform: translateY(-2px) scale(1.05);
          }
        }
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      width: calc(50% - 1.5rem);
      gap: 1rem;
      flex: 1;
      min-width: 300px;

      @media screen and (max-width: 968px) {
        width: 100%;
      }

      input {
        height: 48px;
        padding: 1rem;
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors.background};
        border: 2px solid transparent;
        color: #eeeeee;
        font-family: "Poppins", sans-serif;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:focus {
          border-color: ${(props) => props.theme.colors.button_primary};
          outline: none;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        &::placeholder {
          color: #929292;
          font-size: 16px;
          font-family: "Poppins", sans-serif;
          transition: color 0.3s ease;
        }

        &:focus::placeholder {
          color: #666;
        }

        @media screen and (max-width: 480px) {
          height: 44px;
          padding: 0.8rem;
          font-size: 14px;
        }
      }

      textarea {
        height: 298px;
        padding: 1rem;
        border-radius: 8px;
        background-color: ${(props) => props.theme.colors.background};
        border: 2px solid transparent;
        resize: none;
        color: #eeeeee;
        font-family: "Poppins", sans-serif;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:focus {
          border-color: ${(props) => props.theme.colors.button_primary};
          outline: none;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        &::placeholder {
          font-size: 16px;
          color: #929292;
          font-family: "Poppins", sans-serif;
          transition: color 0.3s ease;
        }

        &:focus::placeholder {
          color: #666;
        }

        @media screen and (max-width: 480px) {
          height: 200px;
          padding: 0.8rem;
          font-size: 14px;
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
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        justify-content: center;
        transform: translateY(0);
        position: relative;
        overflow: hidden;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.5s;
        }

        &:hover {
          background-color: ${(props) =>
            props.theme.colors.button_primary_hover};
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

          &::before {
            left: 100%;
          }

          img,
          .loader {
            transform: translateX(5px);
          }
        }

        &:active {
          transform: translateY(0);
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        img,
        .loader {
          transition: transform 0.3s ease;
        }

        .loader {
          animation: spin 1s linear infinite;
        }
      }
    }
  }

  @media screen and (max-width: 1215px) {
    flex-direction: column;

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

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .messageError {
    font: ${(props) => props.theme.fonts.period_project};
    color: red;
  }
  .messageSuccess {
    font: ${(props) => props.theme.fonts.period_project};
    color: ${(props) => props.theme.colors.font_secondary};
  }
`;
