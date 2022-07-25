import React from "react";

// Import styled components
import { StyledCopyButton } from "./styles";

// Import global styles
import { TextWrapper } from "../../../pages/globalStyles";

// Import font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

// Import utility functions
import { getShortenedAddressString } from "../../../helper/util";

export const CopyButton = ({ artistAddress }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(artistAddress);
  };
  return (
    <StyledCopyButton onClick={copyToClipboard}>
      <TextWrapper>{getShortenedAddressString(artistAddress)}</TextWrapper>
      <FontAwesomeIcon icon={faCopy} />
    </StyledCopyButton>
  );
};
