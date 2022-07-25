import styled from "styled-components";

export const TrendingNftCardContainer = styled.div`
  max-width: 312px;
  min-height: 312px;
  display: flex;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 1em;
  margin: 1em 0.5em;
  aspect-ratio: 1/1;

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
  }
`;
