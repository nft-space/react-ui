import React from "react";

// Improt styled components
import {
  FooterMainContainer,
  FooterLegalLinksContainer,
  FooterSocialLinksContainer,
  StyledFooterLogoContainer,
} from "./styles";

// Import global styled
import { Heading, TextWrapper } from "../../pages/globalStyles";

// Import font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      <FooterMainContainer>
        <a href="/">
          <StyledFooterLogoContainer>
            <Heading>NFT SPACE</Heading>
            <TextWrapper>BETA</TextWrapper>
          </StyledFooterLogoContainer>
        </a>
        <FooterSocialLinksContainer>
          <a
            href="https://twitter.com/NFTSpace_cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://discord.gg/35KevZJK4x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </FooterSocialLinksContainer>
      </FooterMainContainer>
      <hr style={{ color: "white", margin: "0.01rem", height: "0px" }} />
      <FooterLegalLinksContainer>
        <a href="/terms-and-conditions">TERMS AND CONDITIONS</a>
        <a href="/privacy">PRIVACY POLICY</a>
      </FooterLegalLinksContainer>
    </>
  );
};
