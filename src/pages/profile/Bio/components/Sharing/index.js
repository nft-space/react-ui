import React from "react";

// Import styled components
import { StyledSharingLinkContainer } from "./styles";

// Import font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export const WebsiteLink = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <StyledSharingLinkContainer>
        <FontAwesomeIcon icon={faGlobe} />
      </StyledSharingLinkContainer>
    </a>
  );
};

export const InstagramLink = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <StyledSharingLinkContainer>
        <FontAwesomeIcon icon={faInstagram} />
      </StyledSharingLinkContainer>
    </a>
  );
};

export const TwitterLink = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <StyledSharingLinkContainer>
        <FontAwesomeIcon icon={faTwitter} />
      </StyledSharingLinkContainer>
    </a>
  );
};

export const DiscordLink = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <StyledSharingLinkContainer>
        <FontAwesomeIcon icon={faDiscord} />
      </StyledSharingLinkContainer>
    </a>
  );
};
