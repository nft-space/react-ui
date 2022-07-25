import styled from "styled-components";

export const StyledCollectionCardContainer = styled.div`
  /* Position */
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  /* Sizing */
  max-width: 270px;
  height: max-content;
  /* Content Alignment */
  margin: 1em;
  /* Appearance */
  background: #fafafa;
  border-radius: 1em;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
`;

export const StyledCollectionCardImage = styled.div`
  /* Position */
  display: grid;
  grid-row: 1 / 8;
  grid-column: 1/2;
  /* Sizing */
  max-width: 100%;
  min-height: 250px;
  height: auto;
  /* Content alignment */
  padding: 1em;
  margin: auto;

  img {
    /* Sizing */
    width: 100%;
    max-height: 250px;
    height: auto;
    /* Appearance */
    border-radius: 16px;
    object-fit: contain;
  }
`;

export const StyledCollectionCardTitle = styled.div`
  /* Position */
  display: grid;
  grid-row: 8 / 9;
  grid-column: 1/2;
  /* Content alignment */
  justify-content: center;
  align-items: center;
`;

export const StyledCollectionCardArtistName = styled.div`
  /* Position */
  display: grid;
  grid-row: 9 / 10;
  grid-column: 1/2;
  /* Content alignment */
  justify-content: center;
  align-items: center;
`;

export const StyledCollectionCardArtistAvatar = styled.div`
  /* Position */
  display: grid;
  grid-row: 7/9;
  grid-column: 1/2;
  /* Content alignment */
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  /* Sizing */
  width: 3em;
  aspect-ratio: 1/1;
  /* Appearance */
  border-radius: 50%;
  background: white;
  padding: 0.3em;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
`;
