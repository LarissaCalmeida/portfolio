import styled from "styled-components";

export const Container = styled.div`
  width: 384px;
  height: 344px;
  padding: 24px;
  background-color: ${(props) => props.theme.colors.background_light};
  border: 1px solid ${(props) => props.theme.colors.background_light};
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out both;

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
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transition: left 0.6s;
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.font_secondary};
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4),
      0 0 20px ${(props) => props.theme.colors.font_secondary}33;
    transform: translateY(-10px) scale(1.02);

    &::before {
      left: 100%;
    }

    img {
      transform: scale(1.1);
      filter: brightness(1.1);
    }

    h3 {
      color: ${(props) => props.theme.colors.font_secondary};
    }
  }

  &:active {
    transform: translateY(-5px) scale(1.01);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 400px;
    height: auto;
    min-height: 344px;
  }

  @media screen and (max-width: 416px) {
    width: 100%;
    padding: 20px;

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
      color: #f5f6f6;
      transition: color 0.3s ease;
    }
  }

  h3 {
    font: ${(props) => props.theme.fonts.title_project};
    margin-top: 0.5rem;
    color: #f5f6f6;
    transition: color 0.3s ease, transform 0.3s ease;

    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
  }

  p {
    font: ${(props) => props.theme.fonts.paragraph};
    color: #f5f6f6;
    line-height: 1.6;
    transition: color 0.3s ease;

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }

  img {
    width: 100%;
    border-radius: 8px;
    height: 160px;
    object-fit: cover;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
