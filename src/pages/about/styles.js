import styled from "styled-components";

// Import global styles
import { Heading } from "../globalStyles";

export const StyledAboutBodyContainer = styled.div`
  max-width: 1178px;
  margin: 7em auto 11em auto;
  padding: 3em;
  @media (max-width: 1450px) {
    margin: 3em auto 4em auto !important;
  }
`;

export const AboutHeading = styled(Heading)`
  font-weight: 300;
  line-height: 1.2;
  font-size: 3.5rem;
`;

export const AboutSharingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
  margin: 6em auto;
  @media (max-width: 850px) {
    width: 20vw;
  }

  @media (max-width: 500px) {
    width: 30vw;
  }
`;
