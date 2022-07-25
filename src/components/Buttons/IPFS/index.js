import React from "react";

// Import font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

export const IPFSButton = ({ nftSrc }) => {
  return (
    <a href={nftSrc} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faCube} />
    </a>
  );
};
