import React from "react";

// Import styled components
import { StyledTagButtonContainer } from "./styles";

// Import global styled
import { TextWrapper } from "../../../pages/globalStyles";

export const TagButton = ({ children }) => {
  return (
    <StyledTagButtonContainer>
      <TextWrapper>{children}</TextWrapper>
    </StyledTagButtonContainer>
  );
};
