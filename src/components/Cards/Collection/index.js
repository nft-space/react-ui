import React from "react";

import {
  StyledCollectionCardArtistAvatar,
  StyledCollectionCardContainer,
  StyledCollectionCardTitle,
  StyledCollectionCardArtistName,
  StyledCollectionCardImage,
} from "./styles";

import { Subtitle, Title } from "../../../pages/globalStyles";

export const CollectionCard = ({
  id,
  artistName,
  artistAddress,
  avatarSrc,
  coverSrc,
  verifiedBool,
  collectionTitle,
}) => {
  return (
    <a href={`/collection/${id}`}>
      <StyledCollectionCardContainer>
        <StyledCollectionCardImage>
          <img src={coverSrc} alt="Collection Cover" />
        </StyledCollectionCardImage>
        <StyledCollectionCardArtistName>
          <Title>{artistName}</Title>
        </StyledCollectionCardArtistName>
        <StyledCollectionCardTitle>
          <Subtitle>{collectionTitle}</Subtitle>
        </StyledCollectionCardTitle>
        <StyledCollectionCardArtistAvatar>
          <img src={avatarSrc} alt="Artist Avatar" />
        </StyledCollectionCardArtistAvatar>
      </StyledCollectionCardContainer>
    </a>
  );
};
