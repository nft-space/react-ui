import React, { useContext } from "react";

// Import styled components
import { StyledCoverPreviewContainer } from "./styles";

// Import data context
import { CoverPreviewContext } from "./DataContext";

export const CoverPreview = () => {
  // Define data context
  const { coverFile } = useContext(CoverPreviewContext);
  // Update selected avatar url
  let imageSrc = coverFile ? URL.createObjectURL(coverFile[0]) : "";
  return (
    <StyledCoverPreviewContainer>
      <img src={imageSrc} alt="Avatar preview from file upload"></img>
    </StyledCoverPreviewContainer>
  );
};
