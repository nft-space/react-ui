import React from "react";
import { useNavigate } from "react-router-dom";

// Import styled components
import { StyledBackButton } from "./styles.js";

// Import global styles
import { TextWrapper } from "../../../pages/globalStyles";

export const BackButton = () => {
  let navigate = useNavigate();
  return (
    <StyledBackButton onClick={() => navigate(-1)}>
      <TextWrapper>Back</TextWrapper>
    </StyledBackButton>
  );
};
