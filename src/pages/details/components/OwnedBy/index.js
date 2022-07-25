import React from "react";

// Import styled components
import { StyledOwnedByContainer } from "./styles";

// Import global styles
import { LightGreyTextWrapper } from "../../../globalStyles";

// Import components
import { OwnedBar } from "../../../../components/OwnedBar/index";

// Import Data Context
import { DetailsPageConsumer } from "../DataContext";

export const OwnedByContainer = () => {
  return (
    <DetailsPageConsumer>
      {(context) => (
        <StyledOwnedByContainer>
          <LightGreyTextWrapper>Owned by: </LightGreyTextWrapper>
          {context.ownedByAddressList.length < 0 ? (
            <LightGreyTextWrapper>Unknown</LightGreyTextWrapper>
          ) : context.ownedByAddressList.length > 1 ? (
            <LightGreyTextWrapper>Multiple</LightGreyTextWrapper>
          ) : (
            <OwnedBar {...context} />
          )}
        </StyledOwnedByContainer>
      )}
    </DetailsPageConsumer>
  );
};
