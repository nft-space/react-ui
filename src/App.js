import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/index";

import GlobalStyle from "./pages/globalStyles";
import Index from "./pages/index/index";
import Discover from "./pages/discover/index";
import Profile from "./pages/profile/index";
import Details from "./pages/details/index";
import About from "./pages/about/index";
import { Registration } from "./pages/Registration";
import { Collection } from "./pages/collection";
import { Search } from "./pages/search";
import SeeAllArtists from "./pages/seeAll/artists/index";
import SeeAllCollections from "./pages/seeAll/collections/index";
import { Resources } from "./pages/resources/index";
import { Overview } from "./pages/resources/overview";
import { Safety } from "./pages/resources/safety";
import { Usage } from "./pages/resources/usage";

// Slick slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import data context
import { UserContext } from "./helper/authentication/UserContext";
import { LoginModalContext } from "./components/Modals/Login/DataContext";
import { SignatureContext } from "./components/Buttons/Connect/DataContext";
import { SearchSessionContext } from "./pages/search/DataContext";
import { Footer } from "./components/Footer";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";

function App() {
  // Set state to be shared across site
  const [user, setUser] = useState(null);
  const [openLoginModalBool, setOpenLoginModalBool] = useState(false);
  const [signatureContext, setSignatureContext] = useState({});

  // Set intial search state
  const [searchString, setSearchString] = useState(null);

  // Retrieve logged in information
  useEffect(() => {
    // First check local storage
    let userStorage = localStorage.getItem("user");
    if (!userStorage) return;
    setUser(userStorage);
  }, []);

  return (
    <div className="app">
      <UserContext.Provider value={{ user, setUser }}>
        <LoginModalContext.Provider
          value={{ openLoginModalBool, setOpenLoginModalBool }}
        >
          <SignatureContext.Provider
            value={{ signatureContext, setSignatureContext }}
          >
            <SearchSessionContext.Provider
              value={{ searchString, setSearchString }}
            >
              <NavBar />
              <GlobalStyle />
              <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/discover" element={<Discover />} />
                <Route
                  exact
                  path="/profile/:artistAddress"
                  element={<Profile />}
                />
                <Route exact path="/details/:nftId" element={<Details />} />
                <Route exact path="/artists" element={<SeeAllArtists />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/registration" element={<Registration />} />
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/resources" element={<Resources />} />
                <Route exact path="/resources/safety" element={<Safety />} />
                <Route exact path="/resources/usage" element={<Usage />} />
                <Route
                  exact
                  path="/resources/overview"
                  element={<Overview />}
                />
                <Route
                  exact
                  path="/collection/:collectionId"
                  element={<Collection />}
                />
                <Route
                  exact
                  path="/collections"
                  element={<SeeAllCollections />}
                />
                <Route exact path="/terms-and-conditions" element={<Terms />} />
                <Route exact path="/privacy" element={<Privacy />} />
              </Routes>
              <Footer />
            </SearchSessionContext.Provider>
          </SignatureContext.Provider>
        </LoginModalContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
