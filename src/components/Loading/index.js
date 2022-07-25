import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// Import components
import { GalleryContainer } from "../../components/Gallery";

// Import styled components
import {
  StyledNftCardContainer,
  StyledNftCardImage,
  StyledNftCardTitle,
  StyledNftCardInteraction,
} from "../../components/Cards/Nft/styles";

export const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        margin: "10em auto 100em auto",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export const NftLoading = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          margin: "2em auto",
        }}
      >
        <CircularProgress />
      </Box>
      <GalleryContainer>
        {[...Array(16)].map((_, index) => {
          return (
            <StyledNftCardContainer>
              <StyledNftCardImage></StyledNftCardImage>
              <StyledNftCardTitle></StyledNftCardTitle>
              <StyledNftCardInteraction></StyledNftCardInteraction>
            </StyledNftCardContainer>
          );
        })}
      </GalleryContainer>
    </>
  );
};
