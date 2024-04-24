import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  background-image: url("/background_projects.png");
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;

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

  .projects {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 4rem;
    position: relative;
    align-items: center;
    justify-content: center;
    max-width: 1280px;

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
  }
`;
