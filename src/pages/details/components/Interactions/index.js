import React from "react";

// Import Data Context
import { DetailsPageConsumer } from "../DataContext";

// Improt styled components
import { StyledDetailsPageInteractionsContainer } from "./styles";
import { LikeButton } from "../../../../components/Buttons/Like/index";
import { SaveButton } from "../../../../components/Buttons/Save/index";

// Import Components
import { InteractionButton } from "../../../../components/Buttons/Interaction/index";

export const DetailsPageInteractions = () => {
  return (
    <DetailsPageConsumer>
      {(context) => (
        <StyledDetailsPageInteractionsContainer>
          <InteractionButton>
            <LikeButton
              id={context.id}
              nftLikeCount={context.nftLikeCount}
              isLikedByUser={context.nftLikedByUser}
            />
          </InteractionButton>
          <InteractionButton>
            <SaveButton
              id={context.id}
              nftSaveCount={context.nftSaveCount}
              isSavedByUser={context.nftSavedByUser}
            />
          </InteractionButton>
        </StyledDetailsPageInteractionsContainer>
      )}
    </DetailsPageConsumer>
  );
};
