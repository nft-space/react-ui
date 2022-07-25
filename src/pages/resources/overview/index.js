import React from "react";

// Import styled components
import {
  StyledInfoBodyContainer,
  InfoHeading,
  InfoImageContainer,
} from "../styles";

// Import global styled
import { Heading } from "../../globalStyles";

export const Overview = () => {
  return (
    <StyledInfoBodyContainer>
      <InfoHeading> NFTs Explained</InfoHeading>
      <br />
      <hr />
      <br />
      <InfoImageContainer>
        <img src="/images/NFT-dice.jpg" alt="nyan cat" />
      </InfoImageContainer>

      <br />
      <br />
      <br />
      <Heading> Introduction </Heading>

      <br />
      <hr />
      <br />
      <br />
      <br />
      <p>
        NFT stands for Non-fungible Token, which are mostly created as a
        cryptographic asset using decentralized code that run on blockchains.
      </p>
      <br />
      <p>
        Unlike Bitcoin or Ethereum. NFT represents an unique asset which is not
        replaceable nor interchangeable. For example, A bitcoin is identical to
        another bitcoin. It is a “fungible token” which means it can be
        exchanged or substituted and will hold the same value as another token.
        As its name suggests “Non-fungible” means that it is completely unique.
        NFT is also a “Token”, so it is an asset which can be transferred on a
        blockchain.
      </p>
      <br />
      <p>
        NFTs are used to represent digital assets. They can be many things.
        Often used to represent digital art work, music, in game items and
        virtual land. In fact, NFT serves as a proof of ownership which is
        publicly verifiable on a blockchain. Since it is a token, the transfer
        of ownership can is instant and authenticated on a blockchain.
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Heading> Algorand NFT </Heading>

      <br />
      <hr />
      <br />
      <br />
      <br />
      <p>
        NFT Space uses Algorand blockchain, where NFTs are tokenized as Algorand
        Standard Assets (ASAs). Unlike other blockchains, ASAs are built into
        the Algorand protocol and can be created by asset transaction instead of
        using a smart contract to represent the assets. For more information on
        ASA, see here.{" "}
        <a
          href="https://developer.algorand.org/docs/get-details/asa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          (https://developer.algorand.org/docs/get-details/asa/)
        </a>
      </p>
      <br />
      <p>
        To standardize NFT token on Algorand, there are two commonly used
        standard for NFT: ARC-3 and ARC-69 token standard:
      </p>
      <br />
      <p>
        ARC-3 standard was introduced by Algorand foundation for fungible tokens
        and non-fungible tokens (NFTs). This standard is similar to ERC-1155
        standard on Ethereum blockchain. The detail of ARC-3 standard can be
        found here:
        <a
          href="https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0003.md"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: ".5em" }}
        >
          (https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0003.md)
        </a>
      </p>
      <br />
      <p>
        ARC-69 is a community driven ASA standard for digital media toke. See
        the details here{" "}
        <a
          href="https://github.com/algokittens/arc69"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: ".5em" }}
        >
          (https://github.com/algokittens/arc69)
        </a>
      </p>
      <br />
      <p>
        The main difference between ARC-3 and ARC-69 token is the file hashed to
        the token. For ARC-3, the token’s associated JSON metadata file (stored
        on IPFS) is hashed to the token. This makes the token immutable, once
        the metadata file is uploaded to IPFS and the IPFS cid is hashed on
        blockchain, it is impossible to edit the file. While, ARC-69 token is
        semi-mutable token. Its associated JSON metadata file is stored on
        blockchain as a note in asset configuration transaction. The metadata
        file is mutable and the asset manager can make another configuration
        transaction to update file in the note.{" "}
      </p>
      <br />
      <p>
        One advantage of ARC-69 standard is that it is back compatible with
        existing ARC tokens as the metadate file is stored in asset
        configuration transaction. There is no way to convert an existing token
        into ARC-3 token as the media file’s URL is already hashed to the token
        and cannot be undone.
      </p>
      <br />
      <p>
        Since the media file’s URL is hashed to the ARC-69 token, it is simpler
        to display the media file but the property data will need to be fetched
        separately. There may be some issue to identify the right metadata if
        the asset manager made several asset configuration transactions.
      </p>
      <br />
      <p>
        ARC-3 token is more optimized to fetch media file and properties at the
        same time. The metadata is also immutable once the token is minted. So
        developers do not have to check if the metadata has been updated for the
        token.
      </p>
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
