import styled from "styled-components";

export const StyledDetailsPageBackgroundWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.4) 29.13%,
    rgba(173, 27, 167, 0.4) 386.01%
  );
  padding-top: 10vh;
`;

export const StyledDetailsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  margin: 0 auto;
  max-width: 80vw;
  min-height: 50vw;
  column-gap: 2em;
  margin-bottom: 10em;
  margin-top: 3em;
`;

export const StyledNftViewContainer = styled.div`
  grid-column: 1/2;
  height: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 2em;
`;
export const StyledNftPhotoContainer = styled.div`
  /* Appearance  */
  width: 80%;
  margin: 0 auto;
  border-radius: 24px;
  background: #fafafa;
  box-shadow: 0px 10px 76px rgb (0 0 0 / 10%);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  img {
    width: 100%;
    border-radius: 16px;
    background-size: cover;
  }
`;

export const StyledOverviewContainer = styled.div`
  grid-column: 2/3;
  height: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 4em;
  padding-top: 5vh;
`;
