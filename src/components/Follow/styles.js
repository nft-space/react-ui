import styled from "styled-components";

export const StyledFollowButtonLarge = styled.button`
  position: relative;
  font-family: system-ui;
  font-size: 14px;
  padding: 1rem 3rem;
  border-radius: 50px;
  cursor: pointer;
  background: ${(props) =>
    props.active ? "linear-gradient(45deg,#7A1A7B,#864CFD)" : "white"};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  max-height: 4em;
  aspect-ratio: 8/3;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    padding: 0.15em;
    background: linear-gradient(45deg, #7a1a7b, #864cfd);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const StyledFollowButtonSmall = styled.button`
  background: ${(props) =>
    props.active ? "linear-gradient(45deg,#7A1A7B,#864CFD)" : "darkgrey"};
  color: white;
  border-radius: 50%;
  width: 2em;
  aspect-ratio: 1;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;

  i {
    width: 90%;
  }
`;
