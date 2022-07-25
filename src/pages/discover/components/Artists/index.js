import React, { useContext } from "react";
import { useState, useEffect } from "react";

// Import Util functions
import { axiosGetCall } from "../../../../helper/util.js";
import { propsFromArtistObject } from "../../../../helper/propsConverter.js";
import { DISCOVERY_DISPLAYED_ARTISTS_LIMIT } from "../../../../helper/globals.js";

// Import components
import { ArtistCard } from "../../../../components/Cards/Artist/index.js";
import { GalleryContainer } from "../../../../components/Gallery/index.js";
import { SeeAllButton } from "../../../../components/Buttons/SeeAll/index.js";

// Import styled components
import {
  StyledExploreContainer,
  StyledExploreHeader,
} from "../../../seeAll/styles.js";

// Import global styles
import { Heading } from "../../../globalStyles.js";

// import user context
import { UserContext } from "../../../../helper/authentication/UserContext";

function DiscoverArtists() {
  // Set Initial State
  const [artistList, setArtistList] = useState(null);
  // use user context
  const { user } = useContext(UserContext);
  // Artists API
  useEffect(() => {
    axiosGetCall("/get-discovery-artists", { user: user }).then((res) => {
      setArtistList(res.data);
    });
  }, [user]);
  return (
    <StyledExploreContainer>
      <StyledExploreHeader>
        <Heading>
          Top Artists{" "}
          <span role="img" aria-label="emoji">
            🔥
          </span>
        </Heading>
        <a href="/artists">
          <SeeAllButton />
        </a>
      </StyledExploreHeader>
      {artistList && (
        <GalleryContainer>
          {artistList
            .slice(0, DISCOVERY_DISPLAYED_ARTISTS_LIMIT)
            .map((artistObject) => {
              let props = propsFromArtistObject(artistObject);
              return <ArtistCard {...props} key={props.artistAddress} />;
            })}
        </GalleryContainer>
      )}
    </StyledExploreContainer>
  );
}

export default DiscoverArtists;
