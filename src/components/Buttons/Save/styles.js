import styled from "styled-components";

import BookmarkIcon from "@mui/icons-material/Bookmark";

export const StyledSaveIcon = styled(BookmarkIcon)`
  transform: scale(0.9);
  color: ${(props) => (props.active ? "#864cfd" : "lightgrey")};
  cursor: pointer;
`;
