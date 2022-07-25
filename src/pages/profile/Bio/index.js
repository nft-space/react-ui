import React, { useContext, useEffect } from "react";

// Import styled components
import {
  StyledBioMainContainer,
  StyledCoverPhotoContainer,
  StyledOverviewBackground,
  StyledAvatarPhotoContainer,
  StyledProfileOverviewContainer,
  StyledProfileFollowContainer,
  StyledProfileLinksContainer,
} from "./styles";

// Import components
import { FollowButtonLarge } from "../../../components/Follow/index";
import {
  TwitterLink,
  WebsiteLink,
  InstagramLink,
} from "./components/Sharing/index";
import { CopyButton } from "../../../components/Buttons/Copy/index";
import { ProfileConnections } from "./components/Connections/index";

// Import data context
import { ProfilePageContext } from "./DataContext";

// Import global styles
import { Heading, TextWrapper } from "../../globalStyles";
import { UserContext } from "../../../helper/authentication/UserContext";

export const ProfileBio = () => {
  // Define data context
  const { profilePageProps } = useContext(ProfilePageContext);
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    let userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(userStorage);
    }
  }, []);

  return (
    <StyledBioMainContainer>
      {/* Cover photo */}
      <StyledCoverPhotoContainer>
        <img src={profilePageProps.backgroundImage} alt="profile background" />
      </StyledCoverPhotoContainer>

      {/* Background gradient */}
      <StyledOverviewBackground />

      {/* Profile photo */}
      <StyledAvatarPhotoContainer>
        <img src={profilePageProps.avatarImage} alt="profile avatar" />
      </StyledAvatarPhotoContainer>

      {/* Profile information */}
      <StyledProfileOverviewContainer>
        <Heading>{profilePageProps.artistMonikor}</Heading>
        <CopyButton artistAddress={profilePageProps.artistAddress} />
        <ProfileConnections
          items={profilePageProps.createdItems}
          followers={profilePageProps.followersCount}
          following={profilePageProps.followingCount}
        />
        <TextWrapper>{profilePageProps.artistBio}</TextWrapper>
      </StyledProfileOverviewContainer>

      {/* Follow button */}
      <StyledProfileFollowContainer>
        {user !== profilePageProps.artistAddress && (
          <FollowButtonLarge
            followedByUser={profilePageProps.followedbyUserBool}
          />
        )}
      </StyledProfileFollowContainer>

      {/* Social links */}
      <StyledProfileLinksContainer>
        {profilePageProps.twitterLink && (
          <TwitterLink url={profilePageProps.twitterLink} />
        )}
        {profilePageProps.instagramLink && (
          <InstagramLink url={profilePageProps.instagramLink} />
        )}
        {profilePageProps.websiteLink && (
          <WebsiteLink url={profilePageProps.websiteLink} />
        )}
      </StyledProfileLinksContainer>
    </StyledBioMainContainer>
  );
};
