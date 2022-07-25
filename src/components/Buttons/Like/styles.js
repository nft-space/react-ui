import styled from "styled-components";

import FavoriteIcon from "@mui/icons-material/Favorite";

export const StyledLikeIcon = styled(FavoriteIcon)`
  transform: scale(0.9);
  color: ${(props) => (props.active ? "red" : "lightgrey")};
  cursor: pointer;
`;
