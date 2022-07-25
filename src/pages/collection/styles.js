import styled from "styled-components";

export const CollectionInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.4) 29.13%,
    rgba(173, 27, 167, 0.4) 386.01%
  );
  margin-bottom: 10em;
  @media (max-width: 1600px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 650px;
  }
`;

export const CollectionInfoCoverPhotoContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: lightgray;
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CollectionInfoMainContainer = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  bottom: 7em;
  width: 90%;
  margin: -10px;

  @media (max-width: 1600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -4em;
    right: 0em;
    margin-bottom: -2em;
  }
`;

export const CollectionInfoPhotoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  top: 10px;
  margin-right: 4em;
  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    position: relative;
  }
`;

export const CollectionInfoPhotoContainer = styled.div`
  width: 33em;
  background-color: #fafafa;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  bottom: 1em;
  aspect-ratio: 1;
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: contain;
  }
  @media (max-width: 1600px) {
    width: 26em;
    margin-right: 0em;
  }
  @media (max-width: 1000px) {
    width: 18em;
    min-width: 15em;
  }
  @media (max-width: 900px) {
    width: 14em;
    min-width: 14em;
  }
`;
export const CollectionInfoBioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 1600px) {
    margin-top: 3em;
    right: 2em;
    position: relative;
    * {
      margin-bottom: 0.5em !important;
    }
  }
  @media (max-width: 1000px) {
    margin-bottom: 1.5em !important;
    margin-top: 3em;
    right: 0em;
    align-items: center;
    position: relative;
    justify-content: center;
  }
`;

export const ColleectionInfoBioName = styled.div`
  font-family: system-ui;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 0.5em;
  overflow-wrap: anywhere;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const CollectionInfoBioDescription = styled.div`
  max-width: 499px;
  max-height: 100px;
  height: 100px;
  font-family: system-ui;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: #000000;
  margin: 1em auto;
  overflow: overlay;
  width: 100%;
  @media (max-width: 1000px) {
    padding: 0 2em;
    text-align: center;
  }
`;

export const CollectionInfoInteractionWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 20%;
`;

export const CollectionInfoFollowContainer = styled.div`
  position: relative;
  bottom: 112px;
  @media (max-width: 1000px) {
    position: relative;
    bottom: 0px;
    margin-bottom: 1em;
  }
`;

export const CollectionInfoBioConnectionsContainer = styled.div`
  width: 296px;
  height: 56px;
  margin: 0.5em 0px;

  ul {
    font-family: system-ui;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: #7e7e7e;

    &li:not(:first-child) {
      margin-left: 2em;
      padding-left: 1em;
      border-left: 1px solid #e8e8e8;
    }
    &strong {
      display: block;
      font-family: system-ui;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 130%;
      letter-spacing: -0.02em;
      color: #000000;
      text-align: center;
    }
  }
`;
