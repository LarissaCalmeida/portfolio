import styled from "styled-components";

export const Container = styled.div`
  width: 384px;
  height: 344px;
  padding: 24px;
  background-color: ${(props) => props.theme.colors.background_light};
  border: 1px solid ${(props) => props.theme.colors.background_light};
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.font_secondary};
    box-shadow: 1px 1px 12px ${(props) => props.theme.colors.font_secondary};
  }

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
`;
