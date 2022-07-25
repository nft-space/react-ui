import React, { useEffect, useState, useContext } from "react";
import {
  axiosGetCall,
  getTotalLengthOfAllListsInDictionary,
} from "../../helper/util";

// Import styled components
import {
  SearchBodyContainer,
  SearchTotalResultsContainer,
  SearchGalleryHeadingContainer,
} from "./styles";

// Import global styles
import { Heading, Title } from "../globalStyles";

// Import components
import { GalleryContainer } from "../../components/Gallery";
import { NftCard } from "../../components/Cards/Nft";
import { CollectionCard } from "../../components/Cards/Collection";

// Import utility functions
import { propsFromNftObject } from "../../helper/propsConverter";
import { propsFromCollectionObject } from "../../helper/propsConverter";

// Import data context
import { SearchSessionContext } from "./DataContext";

export const Search = () => {
  // Define search context
  const { searchString, setSearchString } = useContext(SearchSessionContext);
  const [searchResults, setSearchResults] = useState(null);
  const [totalResults, setTotalResults] = useState(null);
  useEffect(() => {
    let searchStorage = localStorage.getItem("searchString");
    setSearchString(searchStorage);
    console.log("get data", {
      searchString: searchStorage,
    });
    axiosGetCall("/get-search-results", {
      searchString: searchStorage,
    }).then(
      (res) => {
        // Get sum of lengths of all lists in dictionary
        let totalResults = getTotalLengthOfAllListsInDictionary(res.data);
        setTotalResults(totalResults);
        setSearchResults(res.data);
      },
      (error) => {
        console.log("error loading in seach results");
      }
    );
  }, []);
  return (
    <SearchBodyContainer>
      <SearchTotalResultsContainer>
        <Heading>Search results for... {searchString}</Heading>
        {totalResults && (
          <SearchTotalResultsContainer>
            {totalResults} results found
          </SearchTotalResultsContainer>
        )}
      </SearchTotalResultsContainer>
      {/* COLLECTION GALLERY  */}
      <GalleryContainer>
        <SearchGalleryHeadingContainer>
          <Title>
            Collection Results (
            {searchResults && searchResults["collections"].length})
          </Title>
          {searchResults &&
            searchResults["collections"].map((collectionObject) => {
              let props = propsFromCollectionObject(collectionObject);
              return <CollectionCard {...props} key={props.id} />;
            })}
        </SearchGalleryHeadingContainer>
      </GalleryContainer>
      {/* NFT GALLERY */}
      <GalleryContainer>
        <SearchGalleryHeadingContainer>
          <Title>
            NFT Results ({searchResults && searchResults["nfts"].length})
          </Title>
          {searchResults &&
            searchResults["nfts"].map((nftObject) => {
              if (typeof nftObject != "object") return undefined;
              let props = propsFromNftObject(nftObject);
              return <NftCard {...props} key={props.id} />;
            })}
        </SearchGalleryHeadingContainer>
      </GalleryContainer>
    </SearchBodyContainer>
  );
};
