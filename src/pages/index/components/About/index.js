import React from "react";

// Components import
import {
  StyledAboutMainContainer,
  StyledAboutContentMainContainer,
  StyledAboutContentHeaderContainer,
  StyledAboutContentBodyContainer,
  StyledAboutContentBodyHeader,
  StyledAboutContentItemWrapper,
  StyledAboutContentItemContainer,
  StyledAboutContentItem,
  StyledAboutContentItemBody,
} from "./styles.js";
import { Heading, Title, TextWrapper } from "../../../globalStyles.js";

export const AboutSection = () => {
  return (
    <StyledAboutMainContainer>
      <StyledAboutContentMainContainer>
        <StyledAboutContentHeaderContainer>
          {/* About Title */}
          <Heading>
            What is NFT Space?{" "}
            <span role="img" aria-label="emoji">
              😍 🔥
            </span>{" "}
          </Heading>
        </StyledAboutContentHeaderContainer>
        <StyledAboutContentBodyContainer>
          <StyledAboutContentBodyHeader>
            <Heading>
              NFT Space is an NFT Discovery Engine and Community Platform.
            </Heading>
          </StyledAboutContentBodyHeader>
          <StyledAboutContentItemWrapper>
            {/*  <--- Item 1*/}
            <StyledAboutContentItemContainer>
              <StyledAboutContentItem>
                <StyledAboutContentItemBody>
                  <img
                    src="images/index/index__about__wallet.png"
                    alt="connect wallet icon"
                  />
                  <Title>Connect</Title>
                  <TextWrapper>
                    Connect your MyAlgo wallet and log in.
                  </TextWrapper>
                </StyledAboutContentItemBody>
              </StyledAboutContentItem>
            </StyledAboutContentItemContainer>
            {/* Item 1 --->*/}
            {/*  <--- Item 2*/}
            <StyledAboutContentItemContainer>
              <StyledAboutContentItem>
                <StyledAboutContentItemBody>
                  <img
                    src="images/index/index__about__creator.png"
                    alt="follow creators icon"
                  />
                  <Title>Follow Creators</Title>
                  <TextWrapper>
                    Follow your favourite creators and smash the like button on
                    their content.
                  </TextWrapper>
                </StyledAboutContentItemBody>
              </StyledAboutContentItem>
            </StyledAboutContentItemContainer>
            {/* Item 2 --->*/}
            {/*  <--- Item 3*/}
            <StyledAboutContentItemContainer>
              <StyledAboutContentItem>
                <StyledAboutContentItemBody>
                  <img
                    src="images/index/index__about__collections.png"
                    alt="create collections icon"
                  />
                  <Title>Create Collections</Title>
                  <TextWrapper>
                    Showcase your own NFTs in fully customized collections
                  </TextWrapper>
                </StyledAboutContentItemBody>
              </StyledAboutContentItem>
            </StyledAboutContentItemContainer>
            {/* Item 3 --->*/}
          </StyledAboutContentItemWrapper>
        </StyledAboutContentBodyContainer>
      </StyledAboutContentMainContainer>
    </StyledAboutMainContainer>
  );
};
