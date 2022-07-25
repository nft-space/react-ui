import React from "react";

// Import styled components
import { StyledInteractionButtonContainer } from "./styles";

export const InteractionButton = (props) => {
  return (
    <StyledInteractionButtonContainer onClick={props.clickHandler}>
      {props.children}
    </StyledInteractionButtonContainer>
  );
};
