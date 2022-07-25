import styled from "styled-components";

export const StyledExploreContainer = styled.div`
  width: min(95vw, 80em);
  margin: 10em auto 0 auto;
`;

export const StyledExploreHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto 4em auto;
  max-width: 75vw;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 2em;
    h2 {
      margin-bottom: 1em;
    }
  }
`;
