import styled from "styled-components";

export const FooterMainContainer = styled.div`
  /* DIMENSIONS */
  height: 113px;
  width: 100%;
  background: #4b0a6b;
  /* FONTS */
  font-family: Monument Extended;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  /* DISPLAY */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  margin-top: 2em;
`;

export const FooterLegalLinksContainer = styled.div`
  height: min-content;
  width: 100%;
  background: #4b0a6b;
  font-family: system-ui;
  font-style: normal;
  font-weight: 600;
  font-size: 0.5em;
  line-height: 29px;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 1em 10%;
  justify-content: space-around;
`;

export const FooterSocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 184px;
  height: 24px;
  background: transparent;
`;

export const StyledFooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
