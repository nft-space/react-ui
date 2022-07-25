import styled from "styled-components";

export const StyledConnectionsContainer = styled.div`
  width: max-content;
  nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  nav li {
    display: flex;
    flex-direction: column;
  }
  nav li:not(:first-child) {
    margin-left: 2em;
    padding-left: 1em;
    border-left: 1px solid #e8e8e8;
  }
`;
