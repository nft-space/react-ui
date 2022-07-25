import React from "react";
import { useState, useEffect, useContext } from "react";
import { GalleryContainer } from "../../../components/Gallery/index.js";

// Import Util functions
import { axiosGetCall } from "../../../helper/util.js";
import { propsFromArtistObject } from "../../../helper/propsConverter.js";

// Import components
import { ArtistCard } from "../../../components/Cards/Artist/index.js";
import { BackButton } from "../../../components/Buttons/Back/index.js";
// Import styled components
import { StyledExploreContainer, StyledExploreHeader } from "../styles.js";

// Import global styles
import { Heading } from "../../globalStyles.js";
import { UserContext } from "../../../helper/authentication/UserContext.js";

function SeeAllArtists() {
  // Set Initial State
  const [artistList, setArtistList] = useState([{}]);
  // Use user data
  const { user } = useContext(UserContext);
  // Artists API
  useEffect(() => {
    axiosGetCall("/get-discovery-artists").then((res) => {
      setArtistList(res.data);
    });
  }, [user]);
  return (
    <StyledExploreContainer>
      <StyledExploreHeader>
        <Heading>Explore Artists</Heading>
        <BackButton />
      </StyledExploreHeader>
      <GalleryContainer>
        {artistList.map((artistObject, index) => {
          let props = propsFromArtistObject(artistObject);
          return <ArtistCard {...props} />;
        })}
      </GalleryContainer>
    </StyledExploreContainer>
  );
}

export default SeeAllArtists;
