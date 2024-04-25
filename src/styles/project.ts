import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1280px;
  width: 100%;
  margin: 5rem 0;
  padding: 0 2rem;

  @media screen and (max-width: 450px) {
    padding: 0;
  }

  .container-project {
    width: 70%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.background_light};
    align-items: start;
    justify-content: start;
    border-radius: 16px;

    @media screen and (max-width: 1080px) {
      width: 100%;
    }

    @media screen and (max-width: 450px) {
      border-radius: 0;
    }

    .text {
      padding: 2rem 3rem 3rem 3rem;

      .header {
        margin-bottom: 1.2rem;
        span {
          color: #cdd0d4;
          font: ${(props) => props.theme.fonts.paragraph};
        }
      }

      .title {
        color: #f5f6f6;
        font: ${(props) => props.theme.fonts.h1};
        margin-bottom: 1.2rem;
      }

      .role,
      .team,
      .resume {
        color: #cdd0d4;
        font: ${(props) => props.theme.fonts.reading_text};

        span {
          font-weight: bold;
        }
      }

      .resume {
        margin-top: 2rem;
        white-space: break-spaces;
      }
    }

    img {
      height: 360px;
      width: 100%;
      /* object-fit: contain; */
      border-radius: 16px 16px 0 0;

      @media screen and (max-width: 450px) {
        border-radius: 0;
        height: 200px;
      }
    }
  }

  .links {
    width: calc(30% - 2rem);
    max-width: 384px;
    min-width: 384px;
    border-radius: 16px;
    height: max-content;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.background_light};

    @media screen and (max-width: 450px) {
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      border-radius: 0;
    }

    .title {
      margin-bottom: 2rem;
      color: #f5f6f6;
      font: ${(props) => props.theme.fonts.title_project};
    }
    button {
      width: 100%;
      padding: 1rem 2rem;
      gap: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 8px;
      cursor: pointer;
      color: #f5f6f6;
      font: ${(props) => props.theme.fonts.paragraph};
      transition: all 0.3s ease-in-out;
    }

    button.primary {
      margin-bottom: 0.8rem;
      background-color: ${(props) => props.theme.colors.button_primary};
      &:hover {
        background-color: ${(props) => props.theme.colors.button_primary_hover};
      }
    }

    button.secondary {
      background-color: ${(props) => props.theme.colors.button_secondary};
      &:hover {
        background-color: ${(props) =>
          props.theme.colors.button_secondary_hover};
      }
    }
  }
`;
