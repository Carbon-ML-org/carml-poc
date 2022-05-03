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
  border-left: 2px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  padding: 0 0 0 0.5rem;

  a {
    text-decoration: none;
  }
`;
