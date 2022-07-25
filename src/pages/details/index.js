import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Import Data Context
import { DetailsPageProvider } from "./components/DataContext";

// Import util
import { axiosGetCall } from "../../helper/util";
import { propsFromDetailsPage } from "../../helper/propsConverter";

// Import styled components
import {
  StyledDetailsPageBackgroundWrapper,
  StyledDetailsGridContainer,
  StyledNftViewContainer,
  StyledNftPhotoContainer,
  StyledOverviewContainer,
} from "./styles";

// Import global styles
import { Heading } from "../../pages/globalStyles";

// Import components
import { DetailsPageInteractions } from "./components/Interactions/index";
import { DetailsPageTags } from "./components/Tags/index";
import { ProfileBar } from "../../components/ProfileBar/index";
import { NftDescription } from "./components/Description/index";
import { NftDetailsTable } from "./components/Details/index";
import { OwnedByContainer } from "./components/OwnedBy/index";
import { BuyButton } from "../../components/Buttons/Buy/index";
import { SeeMoreCarousel } from "./components/SeeMore";

// Import data context
import { UserContext } from "../../helper/authentication/UserContext";

function Details() {
  // Get NFT ID
  const { nftId } = useParams();

  // Set intiial state
  const [detailsPageProps, setDetailsPageProps] = useState(null);

  const { user } = useContext(UserContext);

  // Retrieve api info
  useEffect(() => {
    // Define user context
    let getData = { user: user };
    axiosGetCall(`/details/${nftId}`, getData).then((res) => {
      let formattedDetailsPageObject = propsFromDetailsPage(res.data);
      setDetailsPageProps(formattedDetailsPageObject);
    });
  }, [user]);

  useEffect(() => {
    console.log(detailsPageProps);
  }, [detailsPageProps]);

  return (
    detailsPageProps && (
      <DetailsPageProvider value={detailsPageProps}>
        <StyledDetailsPageBackgroundWrapper>
          <StyledDetailsGridContainer>
            <StyledNftViewContainer>
              {/* Photo */}
              <StyledNftPhotoContainer>
                <img
                  src={
                    detailsPageProps.nftThumbnailSrc
                      ? detailsPageProps.nftThumbnailSrc
                      : detailsPageProps.nftSrc
                  }
                  alt="nft"
                />
              </StyledNftPhotoContainer>

              {/* Owned by */}
              <OwnedByContainer />

              {/* Buy button */}
              <BuyButton nftId={detailsPageProps.id} />
            </StyledNftViewContainer>

            <StyledOverviewContainer>
              {/* Header */}
              <div>
                <Heading style={{ marginBottom: "2em" }}>
                  {detailsPageProps.nftTitle}
                </Heading>

                {/* Interactions */}
                <DetailsPageInteractions />
                {/* Tags */}
                <DetailsPageTags />
              </div>

              {/* Profile bar */}
              <ProfileBar {...detailsPageProps} />

              {/* Description */}
              <NftDescription />

              {/* Details */}
              <NftDetailsTable />
            </StyledOverviewContainer>
          </StyledDetailsGridContainer>
          <SeeMoreCarousel />
        </StyledDetailsPageBackgroundWrapper>
      </DetailsPageProvider>
    )
  );
}

export default Details;
