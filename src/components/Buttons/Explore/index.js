import React from "react";
import { StyledExploreButton } from "./styles";
import { TextWrapper } from "../../../pages/globalStyles";

export const ExploreButton = () => {
  return (
    <a href="/discover">
      <StyledExploreButton>
        <TextWrapper>Explore</TextWrapper>
      </StyledExploreButton>
    </a>
  );
};
