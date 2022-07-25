import React, { useContext } from "react";

// Import styled components
import { StyledNavBar, StyledNavBarLogoContainer } from "./styles";

// Import components
import { TextMarquee } from "../Marquee";
import { SearchBar } from "../SearchBar/index.js";
import { ExploreButton } from "../Buttons/Explore/index.js";
import { ConnectButton } from "../Buttons/Connect";
import { LoginModal } from "../Modals/Login";
import { NavDropdown } from "./components/NavDropdown";

// Import global styles
import { Heading, Subtitle } from "../../pages/globalStyles";

// Import data context
import { UserContext } from "../../helper/authentication/UserContext";

// Import utility functions
import { axiosGetCall } from "../../helper/util";

export const NavBar = () => {
  // Use User Context
  const { setUser } = useContext(UserContext);
  // Logout function
  const handleLogout = () => {
    axiosGetCall(`/logout`).then((res) => {
      setUser(null);
      localStorage.setItem("user", "");
      localStorage.setItem("registrationData", "");
    });
  };
  return (
    <>
      <StyledNavBar>
        {/* Logo */}
        <a href="/">
          <StyledNavBarLogoContainer>
            <Heading>NFT SPACE</Heading>
            <Subtitle>BETA</Subtitle>
          </StyledNavBarLogoContainer>
        </a>

        {/* Search */}
        <SearchBar />

        {/* Buttons */}
        <ExploreButton />

        {/* User authentication */}
        <ConnectButton />

        {/* Dropdown */}
        <NavDropdown handleLogout={handleLogout} />
      </StyledNavBar>
      {/* Text Marquee exists under nav bar */}
      <TextMarquee>
        Discover & collect extraordinary digital art and rare nft's{" "}
        <span role="img" aria-label="emoji">
          &#127919; &#128293;
        </span>
      </TextMarquee>
      {/* Login modal */}
      <LoginModal />
    </>
  );
};
