import React from "react";
import { useNavigate } from "react-router-dom";

// Components import
import {
  StyledArtistCardContainer,
  StyledArtistCardBackgroundImage,
  StyledArtistCardAvatarImage,
  StyledArtistCardTitle,
  StyledArtistCardFollowContainer,
} from "./styles.js";
import { Title } from "../../../pages/globalStyles.js";
import { FollowButtonSmall } from "../../Follow/index.js";

export const ArtistCard = ({
  artistName,
  artistAddress,
  avatarSrc,
  backgroundSrc,
  verifiedBool,
  followedBool,
}) => {
  const navigate = useNavigate();
  const relocate = () => navigate(`/profile/${artistAddress}`);
  return (
    <a href={`/profile/${artistAddress}`}>
      <StyledArtistCardContainer>
        <StyledArtistCardBackgroundImage onClick={relocate}>
          <img src={backgroundSrc} alt="artist avatar" />
        </StyledArtistCardBackgroundImage>
        <StyledArtistCardFollowContainer>
          <FollowButtonSmall {...{ followedBool }} />
        </StyledArtistCardFollowContainer>
        <StyledArtistCardAvatarImage onClick={relocate}>
          <img src={avatarSrc} alt="artist avatar" />
        </StyledArtistCardAvatarImage>
        <StyledArtistCardTitle onClick={relocate}>
          <Title>{artistName}</Title>
        </StyledArtistCardTitle>
      </StyledArtistCardContainer>
    </a>
  );
};
