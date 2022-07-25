import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { SEE_MORE_CAROUSEL_SLIDER_SETTINGS } from "../../../../helper/globals";
import { useParams } from "react-router-dom";

// IMport components
import { NftCard } from "../../../../components/Cards/Nft";

// Import util function
import { propsFromNftObject } from "../../../../helper/propsConverter";
import { axiosGetCall } from "../../../../helper/util";

export const SeeMoreCarousel = () => {
  // Get NFT ID
  const { nftId } = useParams();
  const settings = SEE_MORE_CAROUSEL_SLIDER_SETTINGS;
  // Set state for seeMoreNftList
  const [seeMoreNftList, setSeeMoreNftList] = useState(null);
  // contact webserver on page load
  useEffect(() => {
    axiosGetCall(`/get-related-nft-list/${nftId}`).then((res) => {
      setSeeMoreNftList(res.data);
    });
  }, []);

  return (
    seeMoreNftList && (
      <Slider {...settings} style={{ marginBottom: "5em" }}>
        {seeMoreNftList.map((nftObject, index) => {
          let props = propsFromNftObject(nftObject);
          return <NftCard key={index} {...props} />;
        })}
      </Slider>
    )
  );
};
