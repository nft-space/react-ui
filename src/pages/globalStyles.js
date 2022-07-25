import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0; 
        padding:0; 
        font-family:
            -apple-system, 
            BlinkMacSystemFont, 
            'Segoe UI', 
            Roboto, 
            Oxygen, 
            Ubuntu, 
            Cantarell, 
            'Open Sans', 
            'Helvetica Neue', 
            sans-serif;
        }
    a {
        text-decoration: inherit;
        color: inherit;
    }
    button{
      outline: none;
      cursor: pointer;
      border: none;
    }
`;

export const MainHeading = styled.h1`
  color: inherit;
  font-weight: bold;
  font-size: 3rem;
  line-height: 140%;
`;
export const Heading = styled.h2`
  font-weight: bold;
  font-size: 32px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: inherit;
`;
export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: -0.02em;
`;
export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 0.9em;
  line-height: 15px;
  color: inherit;
  margin-right: 0.5em;
`;
export const TextWrapper = styled.span`
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: inherit;
`;
export const PurpleTitle = styled(Title)`
  background: linear-gradient(to right, #7a1a7b, #864cfd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const PurpleSubtitle = styled(Subtitle)`
  background: linear-gradient(to right, #7a1a7b, #864cfd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const LightGreyTextWrapper = styled(TextWrapper)`
  color: #7e7e7e;
`;

export default GlobalStyle;
