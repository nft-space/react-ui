import styled from "styled-components";

export const StyledAvatarPreviewContainer = styled.div`
  aspect-ratio: 1;
  border-radius: 1em;
  background-position: center center;
  background-color: #dfdede;
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  border: 8px solid white;
  position: relative;
  bottom: 7em;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 50%;
  margin-bottom: -4em;
  img {
    pointer-events: none;
    width: 100%;
    border: px solid white;
    aspect-ratio: 1;
    background: white;
    object-fit: cover;
  }

  @media (max-width: 1350px) {
    min-width: 50%;
    bottom: 7em;
    width: 50%;
  }

  @media (max-width: 900px) {
    min-width: 50%;
    bottom: 7em;
    width: 50%;
  }

  @media (max-width: 500px) {
    min-width: 60%;
    bottom: 7em;
    width: 60%;
  }
`;
