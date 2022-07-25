import React, { useState, useEffect } from "react";

// Import styled components
import { StyledBuyButton } from "./styles";

// Import global styles
import { TextWrapper } from "../../../pages/globalStyles";

// Import util
import { axiosGetCall } from "../../../helper/util";

export const BuyButton = ({ nftId }) => {
  // Set intiial state
  const [buyButtonObject, setBuyButtonObject] = useState(null);

  // Retrieve api info
  useEffect(() => {
    axiosGetCall(`/get-is-listed/${nftId}`).then((res) => {
      if (res.data.length > 0) {
        setBuyButtonObject(res.data);
      }
    });
  }, [buyButtonObject]);
  return (
    buyButtonObject && (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.randgallery.com/algo-collection/?address=${nftId}`}
      >
        <StyledBuyButton>
          <img
            src="https://storage.googleapis.com/fast-oxide-335018-public/images/logo/rand_gallery_logo.png"
            alt="rand gallery logo"
          />
          <TextWrapper>Buy {buyButtonObject[0].price}</TextWrapper>
          <img
            src="https://storage.googleapis.com/fast-oxide-335018-public/images/logo/algorand_logo_mark_black.png"
            alt="algorand logo"
          />
        </StyledBuyButton>
      </a>
    )
  );
};
