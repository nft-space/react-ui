import React from "react";

// Import components
import DiscoverArtists from "./components/Artists/index.js";
import DiscoverCollections from "./components/Collections/index.js";
import DiscoverNfts from "./components/Nfts/index.js";

function Discover() {
  return (
    <>
      <DiscoverArtists />
      <DiscoverCollections />
      <DiscoverNfts />
    </>
  );
}

export default Discover;
