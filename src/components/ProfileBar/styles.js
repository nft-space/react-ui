import styled from "styled-components";

export const StyledProfileBarContainer = styled.div`
  max-width: 70%;
  min-height: 70px;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const StyledProfileBarPhotoContainer = styled.div`
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const StyledProfileBarDetailsContainer = styled.div`
  min-width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`;

export const StyledProfileBarAddressContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #ffffff;
  font-family: system-ui;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #000000;
  padding: 1em 2em;
  width: max-content;
  margin: 0.5em;
`;
