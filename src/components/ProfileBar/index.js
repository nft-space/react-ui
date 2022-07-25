import React from "react";

// Import styled components
import {
  StyledProfileBarContainer,
  StyledProfileBarPhotoContainer,
  StyledProfileBarDetailsContainer,
  StyledProfileBarAddressContainer,
} from "./styles";

// Import components
import { FollowButtonLarge } from "../Follow/index";

// Import global styles
import { PurpleTitle } from "../../pages/globalStyles";

// Import util method
import { getShortenedAddressString } from "../../helper/util";

export const ProfileBar = ({
  artistAddress,
  artistAvatarSrc,
  artistName,
  artistFollowedByUser,
}) => {
  console.log("ARTIST ADDRESS", artistFollowedByUser);
  return (
    <StyledProfileBarContainer>
      {/* Image */}
      <a href={`/profile/${artistAddress}`}>
        <StyledProfileBarPhotoContainer>
          <img src={artistAvatarSrc} alt="artist avatar" />
        </StyledProfileBarPhotoContainer>
      </a>

      {/* Details */}
      <a href={`/profile/${artistAddress}`}>
        <StyledProfileBarDetailsContainer>
          <PurpleTitle>{artistName}</PurpleTitle>
          <StyledProfileBarAddressContainer>
            {getShortenedAddressString(artistAddress)}
          </StyledProfileBarAddressContainer>
        </StyledProfileBarDetailsContainer>
      </a>

      {/* Follow */}
      <FollowButtonLarge followedByUser={artistFollowedByUser} />
    </StyledProfileBarContainer>
  );
};
