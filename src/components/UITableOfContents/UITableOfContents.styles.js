import styled from "@emotion/styled";

export const SNav = styled.nav`
  max-height: calc(100vh - 2.5rem);
  overflow: auto;
  position: sticky;
  position: -webkit-sticky;
  top: 5rem;
`;

export const SUl = styled.ul`
  list-style-type: none;
  margin: 1rem 0 0;
  padding: 0;
`;

export const SLi = styled.li`
  padding: 0.5rem 1rem;

  &.active {
    background-color: #f6f7f9;
  }
`;
