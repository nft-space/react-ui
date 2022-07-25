import React from "react";
import { useState, useEffect, useContext } from "react";

// Import Util functions
import { axiosGetCall } from "../../../../helper/util.js";
import { propsFromNftObject } from "../../../../helper/propsConverter.js";

// Import components
import { NftCard } from "../../../../components/Cards/Nft/index.js";
import { GalleryContainer } from "../../../../components/Gallery/index.js";

// Import styled components
import {
  StyledExploreContainer,
  StyledExploreHeader,
} from "../../../seeAll/styles.js";

// Import global styles
import { Heading } from "../../../globalStyles.js";

// Import user context
import { UserContext } from "../../../../helper/authentication/UserContext";

function DiscoverNfts() {
  // Set Initial State
  const [nftList, setNftList] = useState(null);
  // Use user context
  const { user } = useContext(UserContext);
  // Artists API
  useEffect(() => {
    axiosGetCall("/get-discovery-nfts", { user: user }).then((res) => {
      setNftList(res.data);
    });
  }, []);
  return (
    <StyledExploreContainer>
      <StyledExploreHeader>
        <Heading>
          Discover More{" "}
          <span role="img" aria-label="emoji">
            👋
          </span>
        </Heading>
      </StyledExploreHeader>
      {nftList && (
        <GalleryContainer>
          {nftList.map((nftObject) => {
            let props = propsFromNftObject(nftObject);
            return <NftCard {...props} key={props.id} />;
          })}
        </GalleryContainer>
      )}
    </StyledExploreContainer>
  );
}

export default DiscoverNfts;
