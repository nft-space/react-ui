import styled from "styled-components";

export const StyledSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0px 3px rgb(0 0 0 / 10%), 0 1px 3px rgb(0 0 0 / 10%);
  color: rgba(133, 133, 133, 1);
  padding: 0.5em 1em;
  border-radius: 50px;
  max-width: 22em;
  width: 22em;
`;

export const StyledSearchBarInput = styled.input`
  margin: 0 0.5rem;
  width: 100%;
  border: none;

  ::placeholder {
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export const StyledSearchBarButton = styled.button`
  border-radius: 50%;
  width: 2em;
  aspect-ratio: 1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(45deg, #7a1a7b, #864cfd);
  border: none;
  outline: none;
  font-size: 1em;

  svg {
    height: 50%;
  }

  &:active {
    background: #864cfd;
  }
`;
