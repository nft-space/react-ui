import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
// Import styled components
import {
  CollectionInfoWrapper,
  CollectionInfoCoverPhotoContainer,
  CollectionInfoMainContainer,
  CollectionInfoPhotoWrapper,
  CollectionInfoPhotoContainer,
  CollectionInfoBioWrapper,
  ColleectionInfoBioName,
  CollectionInfoBioDescription,
  CollectionInfoInteractionWrapper,
} from "./styles";

// Import global styles
import {
  Title,
  PurpleTitle,
  LightGreyTextWrapper,
  TextWrapper,
} from "../globalStyles";
import { StyledConnectionsContainer } from "../../pages/profile/Bio/components/Connections/styles";

// Import utility functions
import { axiosGetCall } from "../../helper/util";
import {
  propsFromNftObject,
  propsFromCollectionPage,
} from "../../helper/propsConverter";

// Import components
import {
  TwitterLink,
  WebsiteLink,
  DiscordLink,
} from "../profile/Bio/components/Sharing";
import { UserContext } from "../../helper/authentication/UserContext";
import { GalleryContainer } from "../../components/Gallery/index";
import { NftCard } from "../../components/Cards/Nft";
import { Loading, NftLoading } from "../../components/Loading";

export const Collection = () => {
  // Get NFT ID
  const { collectionId } = useParams();

  // Set intiial state
  const [collectionPageProps, setCollectionPageProps] = useState(null);
  const [collectionPageNftList, setCollectionPageNftList] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [galleryLoadingStatus, setGalleryLoadingStatus] = useState(true);

  // Use user data
  const { user } = useContext(UserContext);
  // Retrieve api info
  useEffect(() => {
    axiosGetCall(`/collection/${collectionId}`, { user: user }).then((res) => {
      let formattedCollectionPageObject = propsFromCollectionPage(res.data);
      setCollectionPageProps(formattedCollectionPageObject);
      setLoadingStatus(false);
    });
    // Get collection NFTs
    axiosGetCall(`/get-collection-nft-list/${collectionId}`, {
      user: user,
    }).then((res) => {
      setCollectionPageNftList(res.data);
      setGalleryLoadingStatus(false);
    });
  }, [user]);
  return (
    <>
      {loadingStatus && <Loading />}
      {collectionPageProps && (
        <>
          <CollectionInfoCoverPhotoContainer>
            <img
              src={collectionPageProps.collectionbackgroundSrc}
              alt="collection background"
            />
          </CollectionInfoCoverPhotoContainer>
          <CollectionInfoWrapper>
            <CollectionInfoMainContainer>
              {/* Photo */}
              <CollectionInfoPhotoWrapper>
                <CollectionInfoPhotoContainer>
                  <img
                    src={collectionPageProps.collectionAvatarSrc}
                    alt="collection avatar"
                  />
                </CollectionInfoPhotoContainer>
              </CollectionInfoPhotoWrapper>
              {/* Bio */}
              <CollectionInfoBioWrapper>
                <ColleectionInfoBioName>
                  {collectionPageProps.collectionTitle}
                </ColleectionInfoBioName>
                <div style={{ display: "flex" }}>
                  <TextWrapper>By</TextWrapper>
                  <a href={`/profile/${collectionPageProps.artistAddress}`}>
                    <PurpleTitle style={{ margin: "0 1em" }}>
                      {collectionPageProps.artistName}
                    </PurpleTitle>
                  </a>
                </div>
                <StyledConnectionsContainer>
                  <nav>
                    <li>
                      <LightGreyTextWrapper>Items</LightGreyTextWrapper>
                      <Title>{collectionPageProps.itemCount}</Title>
                    </li>
                  </nav>
                </StyledConnectionsContainer>
                <CollectionInfoBioDescription>
                  {collectionPageProps.collectionDescription}
                </CollectionInfoBioDescription>
              </CollectionInfoBioWrapper>
              <CollectionInfoInteractionWrapper>
                {collectionPageProps.twitterLink && (
                  <TwitterLink url={collectionPageProps.twitterLink} />
                )}
                {collectionPageProps.discordLink && (
                  <DiscordLink url={collectionPageProps.discordLink} />
                )}
                {collectionPageProps.websiteLink && (
                  <WebsiteLink url={collectionPageProps.websiteLink} />
                )}
              </CollectionInfoInteractionWrapper>
            </CollectionInfoMainContainer>
          </CollectionInfoWrapper>
          {galleryLoadingStatus && <NftLoading />}
          {collectionPageNftList && (
            <GalleryContainer>
              {collectionPageNftList.map((nftObject) => {
                let props = propsFromNftObject(nftObject);
                return <NftCard {...props} />;
              })}
            </GalleryContainer>
          )}
        </>
      )}
    </>
  );
};
