import React from "react";

// Import styled components
import { StyledConnectionsContainer } from "./styles";

// Import global styles
import { Title, LightGreyTextWrapper } from "../../../../globalStyles";

export const ProfileConnections = ({ items, following, followers }) => {
  return (
    <StyledConnectionsContainer>
      <nav>
        <li>
          <LightGreyTextWrapper>Items</LightGreyTextWrapper>
          <Title>{items}</Title>
        </li>
        <li>
          <LightGreyTextWrapper>Followers</LightGreyTextWrapper>
          <Title>{followers}</Title>
        </li>
        <li>
          <LightGreyTextWrapper>Following</LightGreyTextWrapper>
          <Title>{following}</Title>
        </li>
      </nav>
    </StyledConnectionsContainer>
  );
};
