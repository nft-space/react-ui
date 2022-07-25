import styled from "styled-components";

export const StyledConnectButton = styled.div`
  position: relative;
  padding: 1rem 1rem;
  border-radius: 50px;
  width: 10em;
  text-align: center;
  cursor: pointer;

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
`;
