import React from "react";

// Import DataContext
import { DetailsPageConsumer } from "../DataContext";

// Import styled components
import {
  StyledNftDetailsContainer,
  StyledNftDetailsHeader,
  StyledNftDetailsItemContainer,
  StyledActionsContainer,
} from "./styles";

// Import global styles
import { Subtitle, LightGreyTextWrapper } from "../../../globalStyles";

// Import components
import { IPFSButton } from "../../../../components/Buttons/IPFS";
import { ReportButton } from "../../../../components/Buttons/Report/index";

export const NftDetailsTable = () => {
  return (
    <DetailsPageConsumer>
      {(context) => (
        <StyledNftDetailsContainer>
          <StyledNftDetailsHeader>Details</StyledNftDetailsHeader>
          {/* Token ID */}
          <StyledNftDetailsItemContainer>
            <LightGreyTextWrapper>Token ID</LightGreyTextWrapper>
            <Subtitle>{context.id}</Subtitle>
          </StyledNftDetailsItemContainer>
          {/* Unit Name */}
          <StyledNftDetailsItemContainer>
            <LightGreyTextWrapper>Unit Name</LightGreyTextWrapper>
            <Subtitle>{context.nftUnitName}</Subtitle>
          </StyledNftDetailsItemContainer>
          {/* Token Standard */}
          <StyledNftDetailsItemContainer>
            <LightGreyTextWrapper>Token Standard</LightGreyTextWrapper>
            <Subtitle>{context.nftStandard}</Subtitle>
          </StyledNftDetailsItemContainer>
          {/* Blockchain */}
          <StyledNftDetailsItemContainer>
            <LightGreyTextWrapper>Blockchain</LightGreyTextWrapper>
            <Subtitle>Algorand</Subtitle>
          </StyledNftDetailsItemContainer>
          {/* Actions */}
          <StyledNftDetailsItemContainer>
            <LightGreyTextWrapper>Actions</LightGreyTextWrapper>
            <StyledActionsContainer>
              <IPFSButton nftSrc={context.nftSrc} />
              <ReportButton />
            </StyledActionsContainer>
          </StyledNftDetailsItemContainer>
        </StyledNftDetailsContainer>
      )}
    </DetailsPageConsumer>
  );
};
