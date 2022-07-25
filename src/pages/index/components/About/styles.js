import styled from "styled-components";

export const StyledAboutMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10% auto;
`;

export const StyledAboutContentMainContainer = styled.div`
  background: #8132b6;
  border-radius: 24px;
  width: min(1171px, 80%);
  min-height: 738px;
`;

export const StyledAboutContentHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #4b0a6b;
  min-height: 106px;
  width: 100%;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  color: white;
`;

export const StyledAboutContentBodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 632px;
  overflow: hidden;
`;

export const StyledAboutContentBodyHeader = styled.div`
  max-width: 600px;
  text-align: center;
  color: white;
  margin-bottom: 2em;
`;

export const StyledAboutContentItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledAboutContentItemContainer = styled.div`
  max-width: 270px;
  min-height: 280px;
  background: #fff9ff;
  border-radius: 16px;
  margin: 1em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
`;

export const StyledAboutContentItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1em;
  margin-bottom: 15%;
  img {
    min-height: 48px;
    max-width: 48px;
    margin-bottom: 1rem;
  }
`;

export const StyledAboutContentItemBody = styled.div`
  font-family: system-ui;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 180%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;
  max-width: 228px;
`;
