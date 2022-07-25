import React from "react";
import { TrendingNftCardContainer } from "./styles";

export const TrendingNftCard = ({ id, imageSrc, imageThumbnailSrc }) => {
  return (
    <a href={`/details/${id}`}>
      <TrendingNftCardContainer>
        <img src={imageThumbnailSrc ? imageThumbnailSrc : imageSrc} alt="Nft" />
      </TrendingNftCardContainer>
    </a>
  );
};
