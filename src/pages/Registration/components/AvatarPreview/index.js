import React, { useContext } from "react";

// Import styled components
import { StyledAvatarPreviewContainer } from "./styles";

// Import data context
import { AvatarPreviewContext } from "./DataContext";

export const AvatarPreview = () => {
  // Define data context
  const { avatarFile } = useContext(AvatarPreviewContext);
  // Update selected avatar url
  let imageSrc = avatarFile ? URL.createObjectURL(avatarFile[0]) : "";
  return (
    <StyledAvatarPreviewContainer>
      <img src={imageSrc} alt="Avatar preview from file upload"></img>
    </StyledAvatarPreviewContainer>
  );
};
