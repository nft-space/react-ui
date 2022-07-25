import styled from "styled-components";

export const StyledRegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 40%;
  margin: 0 auto 6em auto;
  padding-top: 2em;
  border-bottom: 1px solid #dee2e6;
  min-height: 800px;

  @media (max-width: 1000px) {
    max-width: 80%;
  }
`;
