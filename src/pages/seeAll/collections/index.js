import React from "react";
import { useState, useEffect } from "react";
import { GalleryContainer } from "../../../components/Gallery/index.js";

// Import Util functions
import { axiosGetCall } from "../../../helper/util.js";
import { propsFromCollectionObject } from "../../../helper/propsConverter.js";

// Import components
import { CollectionCard } from "../../../components/Cards/Collection/index.js";
import { BackButton } from "../../../components/Buttons/Back/index.js";
// Import styled components
import { StyledExploreContainer, StyledExploreHeader } from "../styles.js";

// Import global styles
import { Heading } from "../../globalStyles.js";

function SeeAllCollections() {
  // Set Initial State
  const [collectionList, setCollectionList] = useState([{}]);
  // Artists API
  useEffect(() => {
    axiosGetCall("/get-discovery-collections").then((res) => {
      setCollectionList(res.data);
    });
  }, []);
  return (
    <StyledExploreContainer>
      <StyledExploreHeader>
        <Heading>Explore Collections</Heading>
        <BackButton />
      </StyledExploreHeader>
      <GalleryContainer>
        {collectionList.map((collectionObject, index) => {
          let props = propsFromCollectionObject(collectionObject);
          return <CollectionCard {...props} />;
        })}
      </GalleryContainer>
    </StyledExploreContainer>
  );
}

export default SeeAllCollections;
