import React from "react";

// Import font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

// Import styled components
import {
  StyledAboutBodyContainer,
  AboutHeading,
  AboutSharingContainer,
} from "./styles";

function About() {
  return (
    <StyledAboutBodyContainer>
      <AboutHeading> Our Story</AboutHeading>
      <br />
      <hr />
      <br />
      <p>
        Project NFT Space was inspired by beautiful digital art works. We love
        art and believe that non-fungible token (NFT) has exciting potentials
        for all types of digital art. Our project is built on Algorand
        blockchain and incubated in Algorand accelerator program with the
        support from Algorand foundation and encode club.
      </p>
      <br />
      <p>
        Our main focus is to make NFT accessible to everyone by creating a
        platform to connect artists and fans from different marketplaces and
        social media platforms. To discover inspiration, share ideas and follow
        your favourite artists. We want to create a platform for users to engage
        with artists, share ideas and get inspired.
      </p>
      <br />
      <p>
        NFT Space is in a very early-stage. We are keen to get your feedback to
        improve user experience, If you have any ideas, suggestions or features
        you want us to implement, feel free to reach us on our discord Channel.
      </p>
      <br />
      <p>Follow us on twitter or Join our discord community:</p>
      <br />
      <AboutSharingContainer>
        <a
          target="_blank"
          href="https://twitter.com/NFTSpace_cloud"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ fontSize: "2em", color: "#00acee" }}
          />
        </a>
        <a
          target="_blank"
          href="https://discord.gg/35KevZJK4x"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faDiscord}
            style={{ fontSize: "2em", color: "#7289da" }}
          />
        </a>
      </AboutSharingContainer>
    </StyledAboutBodyContainer>
  );
}

export default About;
