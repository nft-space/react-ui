import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// MUI import
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// Import styled components
import { StyledProfileGallerySectionContainer } from "./styles";

// Import components
import { GalleryContainer } from "../../../components/Gallery";
import { NftCard } from "../../../components/Cards/Nft/index";

// Import utility functions
import { axiosGetCall } from "../../../helper/util";
import { propsFromNftObject } from "../../../helper/propsConverter";

// import user data context
import { UserContext } from "../../../helper/authentication/UserContext";
import { Loading, NftLoading } from "../../../components/Loading";

export const ProfilePageGallery = () => {
  // Get artist address
  const { artistAddress } = useParams();

  // Set Initial State
  const [selectedTab, setSelectedTab] = useState("created");
  const [nftList, setNftList] = useState([{}]);
  const [loading, setLoading] = useState(true);

  // Handle tab change
  const handleTabChange = (_, newTab) => {
    setSelectedTab(newTab);
  };

  // Get user
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    let userStorage = localStorage.getItem("user");
    if (userStorage) {
      setUser(userStorage);
    }
  }, []);

  // Update API on tab change
  useEffect(() => {
    // Trigger loading
    setLoading(true);
    //   Set up GET request data object
    let getParameters = {
      artistAddress: artistAddress,
      tabType: selectedTab,
      filter: "",
      offset: "",
      userAddress: user,
    };
    axiosGetCall("/profile/get-profile-tab-nfts", getParameters).then((res) => {
      setLoading(false);
      setNftList(res.data);
    });
  }, [selectedTab, user]);
  return (
    <StyledProfileGallerySectionContainer>
      {/* Tabs */}
      <Box sx={{ width: "100%", margin: "0 0 4em 0" }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="profile gallery tab selectors"
          centered
        >
          <Tab value="created" label="created" />
          <Tab value="owned" label="owned" />
          <Tab value="saved" label="saved" />
        </Tabs>
      </Box>

      {/* Gallery */}
      {loading && <NftLoading />}
      {!loading && (
        <GalleryContainer>
          {nftList.map((nftObject) => {
            let props = propsFromNftObject(nftObject);
            return <NftCard {...props} />;
          })}
        </GalleryContainer>
      )}
    </StyledProfileGallerySectionContainer>
  );
};
