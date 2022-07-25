import React from "react";

// Import Data Context
import { DetailsPageConsumer } from "../DataContext";

// Import styled components
import { StyledDetailsPageTagsContainer } from "./styles";

// Import components
import { TagButton } from "../../../../components/Buttons/Tags/index";

// Import components
export const DetailsPageTags = () => {
  return (
    <DetailsPageConsumer>
      {({ nftTagsList }) => (
        <StyledDetailsPageTagsContainer>
          {nftTagsList.map((tagString, index) => {
            return <TagButton key={index}>{tagString}</TagButton>;
          })}
        </StyledDetailsPageTagsContainer>
      )}
    </DetailsPageConsumer>
  );
};
