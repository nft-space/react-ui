import styled from "@emotion/styled";

// Import global styles
import { Heading } from "../globalStyles";

export const StyledResourceTileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 30%);
  grid-template-rows: 1fr;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 4em 1em;
  a {
    margin: auto;
    width: 80%;
  }
`;

export const StyledResourcePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 900px;

  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.4) 29.13%,
    rgba(173, 27, 167, 0.4) 386.01%
  );
`;

export const StyledInfoBodyContainer = styled.div`
  max-width: 100vw;
  margin: 7em auto 11em auto;
  padding: 3em 20vw;
  p {
    font-size: 1.4em;
  }
  li {
    font-size: 1.4em;
  }
  @media (max-width: 1450px) {
    margin: 3em auto 4em auto !important;
  }
`;

export const InfoHeading = styled(Heading)`
  font-weight: 300;
  line-height: 1.2;
  font-size: 3.5rem;
`;

export const InfoImageContainer = styled.div`
  img {
    max-width: 100%;
    margin: 1em;
    overflow: hidden;
    object-fit: cover;
    width: 100%;
    height: 30vw;
    object-fit: cover;
    width: 100%;
    margin: 5em 0em;
  }
`;
