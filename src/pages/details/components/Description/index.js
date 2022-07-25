import React from "react";

// Import styled components
import {
  DetailsPageDescriptionHeader,
  DetailsPageDescriptionContainer,
} from "./styles";

// Import Data Context
import { DetailsPageConsumer } from "../DataContext";

// Import global styles
import { TextWrapper } from "../../../globalStyles";

export const NftDescription = () => {
  return (
    <DetailsPageConsumer>
      {(context) => (
        <DetailsPageDescriptionContainer>
          <DetailsPageDescriptionHeader>
            Description
          </DetailsPageDescriptionHeader>
          <TextWrapper>{context.nftDescription}</TextWrapper>
        </DetailsPageDescriptionContainer>
      )}
    </DetailsPageConsumer>
  );
};
