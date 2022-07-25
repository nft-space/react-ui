import React from "react";
import { useState, useEffect } from "react";

// Util Imports
import { axiosGetCall } from "../../../../helper/util.js";
import { propsFromNftObject } from "../../../../helper/propsConverter";

// Component Imports
import { TrendingCarousel } from "../../../../components/Carousels/Trending/index.js";
import { TrendingNftCard } from "../../../../components/Cards/Trending/index.js";
import { StyledTrendingNftsContainer } from "./styles.js";

export const TrendingNftSection = () => {
  // Set Initial State
  const [trendingNftList, setTrendingNftList] = useState(null);
  const [trendingNftList2, setTrendingNftList2] = useState(null);

  // Trending NFTs API
  useEffect(() => {
    axiosGetCall("/get-trending-nft-list").then((res) => {
      setTrendingNftList(res.data);
    });
  }, []);
  useEffect(() => {
    axiosGetCall("/get-trending-nft-list").then((res) => {
      setTrendingNftList2(res.data);
    });
  }, []);
  return (
    <>
      <StyledTrendingNftsContainer>
        {/* Carousel for Trending NFTs */}
        {trendingNftList && (
          <TrendingCarousel>
            {trendingNftList.map((trendingNftObject, index) => {
              let props = propsFromNftObject(trendingNftObject);
              return <TrendingNftCard key={index} {...props} />;
            })}
          </TrendingCarousel>
        )}
        {trendingNftList2 && (
          <TrendingCarousel>
            {trendingNftList2.map((trendingNftObject, index) => {
              let props = propsFromNftObject(trendingNftObject);
              return <TrendingNftCard key={index} {...props} />;
            })}
          </TrendingCarousel>
        )}
      </StyledTrendingNftsContainer>
    </>
  );
};
