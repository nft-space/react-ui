import React from "react";

// Import styled components
import {
  StyledInfoBodyContainer,
  InfoHeading,
  InfoImageContainer,
} from "../styles";

// Import global styled
import { Heading } from "../../globalStyles";

export const Safety = () => {
  return (
    <StyledInfoBodyContainer>
      <InfoHeading> User Safety and anti-fraud</InfoHeading>
      <br />
      <hr />
      <br />
      <InfoImageContainer>
        <img src="/images/nft-security2.jpeg" alt="security" />
      </InfoImageContainer>
      <br />
      <br />
      <br />
      <Heading> How to ensure safe usage </Heading>
      <br />
      <hr />
      <br />
      <br />
      <br />
      <p>
        Generally speaking, NFT is a token linked with media file. Since the
        media file of a NFT like JPG is often stored in IPFS which is a protocol
        and a peer-to-peer network for storing and sharing data. So the media
        file is public accessible. It is possible that someone can download the
        media file of an NFT and mint another NFT with the same media file.
      </p>
      <br />
      <p>
        The first rule of thumb to follow is generally: If the deal seems too
        good to be true, that&#39;s because it probably is. Prices of NFTs are
        based on supply and demand. If an NFT is priced significantly cheaper or
        more expensive than similar NFTs from the same collection or category,
        it may be a fake
      </p>
      <br />
      <p>
        You can verify the authenticity of the NFT by doing a reverse Google
        image search. If that image already exists elsewhere, check where it is
        originally from. Unfortunately, this is only applicable to image NFTs
        for now; it is much harder to verify the authenticity of video and gif
        NFTs.
      </p>
      <br />
      <br />
      <br />
      <br />
      <img
        src="/images/google.png"
        alt="google search example"
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
      <p>
        If the NFT you suspect to be a fake is part of a collection but the
        creator’s address isn&#39;t not display on the collection page, then the
        NFT is likely to be a fake.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <img
        src="/images/algo-owls.png"
        alt="algo collection example"
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
      <p>
        A few websites on Algorand will verify collections and their creators
        like Randgallery, nftexplorer and NFTSpace, et al. If the NFT is part of
        a verified collection on NFT Space, a blue checkmark will appear by its
        title.
      </p>
      <br />
      <p>
        Pay attention to the creator’s address and you can check the assets
        created by the address in algoexplorer by selecting the Assets tab. If
        the address does not match the creator’s address in the collection, it
        is likely to be a fake.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />

      <img
        src="/images/safety-example.jpg"
        alt="safety-example"
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
      <br />
      <br />
      <br />
      <hr />
    </StyledInfoBodyContainer>
  );
};
