import styled from "styled-components";

export const StyledCoverPreviewContainer = styled.div`
  min-width: 100%;
  height: 200px;
  background-position: center center;
  background-color: #dfdede;
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;
