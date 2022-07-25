import React from "react";
import { useState, useEffect } from "react";

// Import Util functions
import { axiosGetCall } from "../../../../helper/util.js";
import { propsFromCollectionObject } from "../../../../helper/propsConverter.js";
import { DISCOVERY_DISPLAYED_COLLECTIONS_LIMIT } from "../../../../helper/globals.js";

// Import components
import { CollectionCard } from "../../../../components/Cards/Collection/index.js";
import { GalleryContainer } from "../../../../components/Gallery/index.js";
import { SeeAllButton } from "../../../../components/Buttons/SeeAll/index.js";

// Import styled components
import {
  StyledExploreContainer,
  StyledExploreHeader,
} from "../../../seeAll/styles.js";

// Import global styles
import { Heading } from "../../../globalStyles.js";

function DiscoverCollections() {
  // Set Initial State
  const [collectionList, setCollectionList] = useState(null);
  // Artists API
  useEffect(() => {
    axiosGetCall("/get-discovery-collections").then((res) => {
      setCollectionList(res.data);
    });
  }, []);
  return (
    <StyledExploreContainer>
      <StyledExploreHeader>
        <Heading>
          Discover Collections{" "}
          <span role="img" aria-label="emoji">
            🎯
          </span>
        </Heading>
        <a href="/collections">
          <SeeAllButton />
        </a>
      </StyledExploreHeader>
      {collectionList && (
        <GalleryContainer>
          {collectionList
            .slice(0, DISCOVERY_DISPLAYED_COLLECTIONS_LIMIT)
            .map((collectionObject) => {
              let props = propsFromCollectionObject(collectionObject);
              return <CollectionCard {...props} key={props.id} />;
            })}
        </GalleryContainer>
      )}
    </StyledExploreContainer>
  );
}

export default DiscoverCollections;
