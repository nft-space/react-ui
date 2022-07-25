import styled from "styled-components";

export const StyledArtistCardContainer = styled.div`
  /* Position */
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  /* Sizing */
  max-width: 270px;
  max-height: 237px;
  height: max-content;
  /* Content Alignment */
  margin: 1em;
  /* Appearance */
  background: white;
  border-radius: 1em;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
`;

export const StyledArtistCardBackgroundImage = styled.div`
  /* Position */
  display: grid;
  grid-row: 1 / 4;
  grid-column: 1/2;
  /* Sizing */
  max-width: 100%;
  height: auto;
  /* Content alignment */
  padding: 1em;
  margin: 0 auto;

  img {
    /* Sizing */
    width: 100%;
    height: 100%;
    /* Appearance */
    border-radius: 1em;
    object-fit: cover;
  }
`;

export const StyledArtistCardAvatarImage = styled.div`
  display: grid;
  grid-row: 3 / 5;
  grid-column: 1/2;
  max-width: 70px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  padding: 0.3em;
  margin: 0 auto;
  background: white;

  img {
    /* Sizing */
    width: 100%;
    height: 100%;
    /* Appearance */
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const StyledArtistCardTitle = styled.div`
  /* Position */
  display: grid;
  grid-row: 4 / -1;
  grid-column: 1/2;
  /* Content alignment */
  justify-content: center;
  align-items: center;
`;

export const StyledArtistCardFollowContainer = styled.div`
  /* Position */
  display: grid;
  grid-row: 1 / 2;
  grid-column: 1/2;
  margin-top: 2em;
  padding-right: 2em;
  justify-content: flex-end;
  align-items: center;
  /* Sizing */
  width: 100%;
  max-height: 40px;
`;
