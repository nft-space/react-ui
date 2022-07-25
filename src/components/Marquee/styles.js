import styled from "styled-components";

export const StyledMarqueeContainer = styled.div`
  /* Display settings */
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  background: linear-gradient(45deg, #7a1a7b, #864cfd);
  /* Position */
  position: relative;
  overflow-x: hidden;
  /* Sizing */
  height: 48px;
  width: 100%;
  /* Text */
  color: #ffffff;
  text-align: left;
  text-transform: uppercase;
  * {
    overflow-x: hidden;
  }
`;

export const StyledMarqueeTextWrapper = styled.div`
  position: relative;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  will-change: transform;
  overflow-x: hidden;
`;

export const StyledMarqueeText = styled.div`
  display: inline-block;
  overflow-x: hidden;
  span {
    margin-left: 1em;
    margin-right: 1em;
    overflow-x: hidden;
    letter-spacing: 0.16em;
    color: white;
  }
  img {
    height: 1rem;
    width: 1rem;
    overflow-x: hidden;
  }
`;
