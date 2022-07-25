import React, { useRef } from "react";
import {
  StyledSearchBarContainer,
  StyledSearchBarButton,
  StyledSearchBarInput,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { axiosGetCall } from "../../helper/util";

export const SearchBar = () => {
  // Define search context

  // Create search input reference
  const searchInputRef = useRef(null);
  const handleSearch = () => {};
  const handlePressKey = (e) => {
    if (e.key === "Enter") {
      submitSearch(searchInputRef.current.value);
    }
  };
  const updateSearchString = async (searchQueryString) => {
    localStorage.setItem("searchString", searchQueryString);
  };
  const submitSearch = async (searchQueryString) => {
    axiosGetCall(`/check-valid-artist-search/${searchQueryString}`).then(
      (res) => {
        if (res.data) {
          return (window.location.href = `/profile/${searchQueryString}`);
        } else {
          updateSearchString(searchQueryString).then(() => {
            return console.log((window.location.href = "/search"));
          });
        }
      }
    );
  };
  return (
    <StyledSearchBarContainer>
      <StyledSearchBarInput
        onKeyUp={handlePressKey}
        placeholder="Search collections, items and users..."
        ref={searchInputRef}
      />
      <StyledSearchBarButton onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </StyledSearchBarButton>
    </StyledSearchBarContainer>
  );
};
