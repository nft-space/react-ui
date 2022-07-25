import React from "react";

// Import styled components
import {
  StyledInfoBodyContainer,
  InfoHeading,
  InfoImageContainer,
} from "../styles";

// Import global styled
import { Heading } from "../../globalStyles";

export const Usage = () => {
  return (
    <StyledInfoBodyContainer>
      <InfoHeading> How to use NFT Space!</InfoHeading>
      <br />
      <hr />
      <br />
      <InfoImageContainer>
        <img src="/images/nyan-cat.jpg" alt="nyan-cat" />
      </InfoImageContainer>
      <br />
      <br />
      <br />
      <Heading> How to connect wallet? </Heading>
      <br />
      <hr />
      <br />
      <br />
      <br />
      <p>
        NFT space offers better user experience if you log in. You will need a
        MyAlgo wallet to log in{" "}
        <a
          href="https://wallet.myalgo.com/access"
          target="_blank"
          style={{ marginLeft: ".5em" }}
          rel="noopener noreferrer"
        >
          (https://wallet.myalgo.com/access)
        </a>
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <img
        src="/images/my-algo-example.jpg"
        alt="my-algo-example"
        style={{
          margin: "auto",
          width: "fit-content",
          display: "flex",
          justifyContent: "center",
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>NFT Space requires two steps log in:</p>
      <br />
      <br />
      <br />
      <ol style={{ marginLeft: "3em" }}>
        <li>Click connect wallet</li>
        <li>NFT Space get your public address from MyAlgo wallet</li>
        <li>
          Sign a transaction (don’t worry, there will not be any fee for
          verification)
        </li>
        <li>NFT Space will verify your signature to sign you in</li>
      </ol>
      <br />
      <br />
      <br />
      <p>
        The reason for this is to protect your account. When connected to
        MyAlgo, NFT Space gets your public address back. Hacker can pretend as
        you to send us your public address. Therefore, NFT space requires
        signature verification. Only user with private key can sign a
        transaction and we compare the bytes in the signature to verify if it is
        you. The signature will be not sent to the blockchain therefore there is
        no gas fee.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Heading> What if I want to use a different address? </Heading>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <ol style={{ marginLeft: "3em" }}>
        <li>You can go to MyAlgo wallet’s website</li>
        <li>Select settings</li>
        <li>Select the &quot;Connected Sites&quot; Tab</li>
        <li>Disconnect your address from NFT Space.</li>
        <li>
          Go to NFT Space and select the address that you want to use to log in.
        </li>
      </ol>
      <br />
      <br />
      <br />
      <br />
      <br />
      <img
        src="/images/tutorial-settings.png"
        alt="tutorial-settings"
        style={{
          margin: "auto",
          width: "fit-content",
          display: "flex",
          justifyContent: "center",
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Heading> How do I customize my profile? </Heading>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <ol style={{ marginLeft: "3em" }}>
        <li>Click settings</li>
        <li>Click upload image tap to upload profile and background image</li>
        <li>
          Add your username, email address, twitter, Instagram account et al. So
          people can follow you on NFT Space and social media
        </li>
      </ol>
      <br />
      <br />
      <br />
      <br />
      <br />
      <img
        src="/images/upload-image.png"
        alt="upload logo"
        style={{
          margin: "auto",
          width: "fit-content",
          display: "flex",
          justifyContent: "center",
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Heading> How to Create a collection? </Heading>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <p>There are two ways to create a collection on NFT Space.</p>
      <br />
      <p>
        If you would like to create a collection by yourself, then click
        ‘Register Collection’ in the collection tab.
      </p>
      <br />
      <p>Please follow the following steps:</p>
      <br />
      <br />
      <br />
      <ol style={{ marginLeft: "3em" }}>
        <li>Upload a background image for collection page’s background</li>
        <li>Upload a cover image for the collection card</li>
        <li>Write a description for your collection</li>
        <li>
          Add prefix. E.g. Prefix can be the common unitname across the NFTs
          which you would like to add to the collection
        </li>
        <li>Add tags for search</li>
        <li>Add your website and social media links</li>
      </ol>
      <br />
      <br />
      <br />
      <p>
        If you would like us to create a collection for you, then click ‘Apply’
        in the collection tab. Then fill the same form to apply for a
        collection.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
    </StyledInfoBodyContainer>
  );
};
