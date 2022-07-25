import styled from "styled-components";

export const BioRootDiv = styled.div`
  --bio-grid-min-height: 700px;
  --purple-gradient-background-top-to-bottom: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.4) 29.13%,
    rgba(173, 27, 167, 0.4) 386.01%
  );
`;

export const StyledBioMainContainer = styled(BioRootDiv)`
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(16, 1fr);
  min-height: var(--bio-grid-min-height);
  margin-bottom: 2em;
`;

export const StyledCoverPhotoContainer = styled(BioRootDiv)`
  display: grid;
  grid-row: 1 / span 4;
  grid-column: 1 / -1;

  img {
    max-width: 100%;
    max-height: calc(var(--bio-grid-min-height) / 2);
    object-fit: cover;
    width: 100%;
  }
`;

export const StyledOverviewBackground = styled(BioRootDiv)`
  /* Appearance */
  max-height: calc(var(--bio-grid-min-height) / 2);
  background: var(--purple-gradient-background-top-to-bottom);
  /* Grid position */
  grid-row: 5 / -1;
  grid-column: 1 / -1;
`;

export const StyledAvatarPhotoContainer = styled.div`
  display: grid;
  /* Grid position */
  grid-row: 4 / span 6;
  grid-column: 3 / span 4;
  margin: auto;
  /* Appearance */
  background-color: white;
  border-radius: 24px;
  box-shadow: 0px 2px 5px rgb(0 0 0 / 10%);
  /* sizing */
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 1/1;
  /* Content positioning */
  justify-content: center;
  align-items: center;
  /* Content appearance */
  padding: 1em;
  img {
    border-radius: 16px;
    object-fit: contain;
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 1300px) {
    grid-row: 5 / span 6;
  }
`;

export const StyledProfileOverviewContainer = styled.div`
  display: flex;
  grid-row: 5 / span 4;
  grid-column: 8 / span 4;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 40em;
  margin-top: 2em;
`;

export const StyledProfileFollowContainer = styled.div`
  display: grid;
  grid-row: 7 / 8;
  grid-column: 13 / span 2;
  align-items: center;
  justify-content: center;
`;

export const StyledProfileLinksContainer = styled.div`
  display: flex;
  grid-row: 8 / 9;
  grid-column: 13 / span 2;
  align-items: center;
  justify-content: space-evenly;
`;
