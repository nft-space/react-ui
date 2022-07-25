import React from "react";

// Import styled components
import {
  StyledNftCardContainer,
  StyledNftCardImage,
  StyledNftCardTitle,
  StyledNftCardInteraction,
} from "./styles";

// Import global styles
import { Title } from "../../../pages/globalStyles";

// Import components
import { LikeButton } from "../../Buttons/Like/index";
import { SaveButton } from "../../Buttons/Save/index";

export const NftCard = ({
  id,
  imageSrc,
  imageThumbnailSrc,
  nftTitle,
  artistAddress,
  likeCount,
  bookmarkCount,
  likedByUser,
  bookmarkedByUser,
}) => {
  return (
    <a href={`/details/${id}`}>
      <StyledNftCardContainer>
        <StyledNftCardImage>
          <img
            src={imageThumbnailSrc ? imageThumbnailSrc : imageSrc}
            alt="Nft"
            loading="lazy"
          />
        </StyledNftCardImage>
        <StyledNftCardTitle>
          <Title>{nftTitle}</Title>
        </StyledNftCardTitle>
        <StyledNftCardInteraction>
          <LikeButton
            id={id}
            nftLikeCount={likeCount}
            isLikedByUser={likedByUser}
          />
          <SaveButton
            id={id}
            nftSaveCount={bookmarkCount}
            isSavedByUser={bookmarkedByUser}
          />
        </StyledNftCardInteraction>
      </StyledNftCardContainer>
    </a>
  );
};
