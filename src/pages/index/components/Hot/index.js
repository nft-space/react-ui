import React from "react";
import { useState, useEffect } from "react";

// Util imports
import { axiosGetCall } from "../../../../helper/util.js";
import { propsFromCollectionObject } from "../../../../helper/propsConverter";

// Style imports
import { Heading } from "../../../globalStyles.js";

// Components imports
import { DefaultCarousel } from "../../../../components/Carousels/Default/index.js";
import { CollectionCard } from "../../../../components/Cards/Collection/index.js";
import { SeeAllButton } from "../../../../components/Buttons/SeeAll/index.js";

// Styled components import
import { StyledHotCollectionSectionContainer } from "./styles.js";
import { StyledExploreHeader } from "../../../seeAll/styles.js";

export const HotCollectionSection = () => {
  const [hotCollectionList, setHotCollectionList] = useState(null);
  // Hot Collection API
  useEffect(() => {
    axiosGetCall("/get-hot-collection-list").then((res) => {
      setHotCollectionList(res.data);
    });
  }, []);
  return (
    <>
      <StyledHotCollectionSectionContainer>
        {/* Header and see-more button */}
        <StyledExploreHeader>
          <Heading>
            Hot Collections{" "}
            <span role="img" aria-label="emoji">
              🔥
            </span>
          </Heading>
          <a href="/discover">
            <SeeAllButton />
          </a>
        </StyledExploreHeader>

        {/* Carousel for Hot Collections */}
        {hotCollectionList && (
          <DefaultCarousel>
            {hotCollectionList.map((hotCollection, index) => {
              let props = propsFromCollectionObject(hotCollection);
              return <CollectionCard key={index} {...props} />;
            })}
          </DefaultCarousel>
        )}
      </StyledHotCollectionSectionContainer>
    </>
  );
};
