import styled from "@emotion/styled";

export const SAppMain = styled.main`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: ${({ topMargin }) => topMargin}rem;
  position: relative;
  width: 100%;

  & > * {
    padding-top: 1rem;
  }

  & > :first-child {
    flex-grow: 1;
    padding: 0 2rem;
  }

  & > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: 50%;
    padding-right: 2rem;
  }
`;
