import styled from "styled-components";

// import global styles
import { Title } from "../../../globalStyles";

export const StyledNftDetailsContainer = styled.div`
  max-width: 470px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
`;

export const StyledNftDetailsHeader = styled(Title)`
  border-bottom: 1px solid #e8e8e8;
  margin-bottom: 2em;
`;

export const StyledNftDetailsItemContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
`;

export const StyledActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 4em;
`;
