import styled from "styled-components";
import { ExploreButton } from "../../../../components/Buttons/Explore/index";

export const StyledWelcomeSectionContainer = styled.div`
  background: linear-gradient(
    27.7deg,
    rgba(255, 255, 255, 0.4) 29.13%,
    rgba(173, 27, 167, 0.4) 386.01%
  );
  width: 100vw;
  min-height: 859px;
  padding-top: 3em;
`;

export const StyledWelcomeSectionBodyWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
  max-width: 80%;
  margin: auto;
`;

export const StyledWelcomeSectionOverviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2em;
  width: max-content;
  padding: 2em;
`;

export const StyledWelcomeSectionOverviewTextContainer = styled.div`
  font-family: system-ui;
  font-style: normal;
  letter-spacing: -0.02em;
  max-width: 600px;
  margin-bottom: 1.5em;
  * {
    margin-bottom: 0.5em;
  }
`;

export const StyledWelcomeSectionProfilePreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  img {
    max-width: 132.92px;
    min-height: 43.75px;
    margin: 1em;
    object-fit: contain;
  }
`;

export const StyledWelcomeSectionProfilePreviewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  width: max-content;
`;

export const StyledWelcomeSectionOverviewImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 51%;
  height: auto;
  align-content: center;
  img {
    width: 100%;
    height: auto;
  }
`;

export const StyledWelcomeExploreButton = styled(ExploreButton)`
  width: 100% !important;
  margin: 0em 1em;
`;
