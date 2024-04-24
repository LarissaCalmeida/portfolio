import styled from "styled-components";

export const Container = styled.footer`
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
