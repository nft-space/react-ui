import React from "react";

// Import styled components
import { StyledOwnerBarContainer, StyledOwnerBarPhoto } from "./styles";

// Import global styles
import { PurpleSubtitle } from "../../pages/globalStyles";

// Import components
import { FollowButtonSmall } from "../../components/Follow/index";

export const OwnedBar = ({
  ownerName,
  ownerFollowedByUser,
  ownerAvatarSrc,
  ownedByAddressList,
}) => {
  return (
    <StyledOwnerBarContainer>
      <a href={`/profile/${ownedByAddressList[0]}`}>
        <StyledOwnerBarPhoto>
          <img src={ownerAvatarSrc} alt="avatar" />
        </StyledOwnerBarPhoto>
      </a>
      <a href={`/profile/${ownedByAddressList[0]}`}>
        <PurpleSubtitle>{ownerName ? ownerName : "Anonymous"}</PurpleSubtitle>
      </a>
      <FollowButtonSmall followedByUser={ownerFollowedByUser} />
    </StyledOwnerBarContainer>
  );
};
