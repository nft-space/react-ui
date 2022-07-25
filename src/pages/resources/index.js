import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Import styled components
import {
  StyledResourceTileContainer,
  StyledResourcePageWrapper,
} from "./styles";

export const Resources = () => {
  return (
    <StyledResourcePageWrapper>
      <StyledResourceTileContainer>
        <a href="/resources/overview">
          {" "}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="images/NFT-dice.jpg"
              alt="NFT dice"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: "center" }}
              >
                What is an NFT?
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a href="/resources/safety">
          {" "}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="images/NFT-security.jpg"
              alt="NFT security"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: "center" }}
              >
                User Safety
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a href="/resources/usage">
          {" "}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="images/nyan-cat.jpg"
              alt="nyan cat"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: "center" }}
              >
                Get started!
              </Typography>
            </CardContent>
          </Card>
        </a>
      </StyledResourceTileContainer>
    </StyledResourcePageWrapper>
  );
};
