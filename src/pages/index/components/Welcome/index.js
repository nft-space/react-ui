import React from "react";
import {
  StyledWelcomeSectionContainer,
  StyledWelcomeSectionBodyWrapper,
  StyledWelcomeSectionOverviewContainer,
  StyledWelcomeSectionOverviewTextContainer,
  StyledWelcomeSectionProfilePreviewContainer,
  StyledWelcomeSectionProfilePreviewTextContainer,
  StyledWelcomeSectionOverviewImageWrapper,
  StyledWelcomeExploreButton,
} from "./styles.js";
import { MainHeading, TextWrapper, Title } from "../../../globalStyles";
import { SearchBar } from "../../../../components/SearchBar/index.js";

export const WelcomeSection = () => {
  return (
    <StyledWelcomeSectionContainer>
      <StyledWelcomeSectionBodyWrapper>
        {/* Overview */}
        <StyledWelcomeSectionOverviewContainer>
          {/* Overview Text */}
          <StyledWelcomeSectionOverviewTextContainer>
            <TextWrapper>Collect your trending NFTs</TextWrapper>
            <MainHeading>
              Discover Extraordinary NFTs{" "}
              <span role="img" aria-label="emoji">
                🎯
              </span>{" "}
              and Engage with Creators{" "}
              <span role="img" aria-label="emoji">
                🔥
              </span>
            </MainHeading>
            <TextWrapper>First NFT community platform on Algorand</TextWrapper>
          </StyledWelcomeSectionOverviewTextContainer>
          {/* Search Bar */}
          <SearchBar />
          <br />
          {/* Explore Button */}
          <StyledWelcomeExploreButton />
          <br />
          {/* Profile preview */}
          <StyledWelcomeSectionProfilePreviewContainer>
            <img
              src="images/index/welcome/index_sections__main__profile_preview.png"
              alt="profile previews"
            ></img>
            <StyledWelcomeSectionProfilePreviewTextContainer>
              <Title>25+</Title>
              <TextWrapper>The Best NFT Authors</TextWrapper>
            </StyledWelcomeSectionProfilePreviewTextContainer>
          </StyledWelcomeSectionProfilePreviewContainer>
        </StyledWelcomeSectionOverviewContainer>
        {/* Preview Image */}
        <StyledWelcomeSectionOverviewImageWrapper>
          <img
            src="images/index/welcome/index_sections__main__overview.png"
            alt="site demonstration"
          ></img>
        </StyledWelcomeSectionOverviewImageWrapper>
      </StyledWelcomeSectionBodyWrapper>
    </StyledWelcomeSectionContainer>
  );
};
