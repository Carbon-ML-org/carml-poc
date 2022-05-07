import styled from "@emotion/styled";
import { AppBar } from "@mui/material";

export const SAppHeader = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "marginLeft" && prop !== "headerHeight",
})`
  --app-header-margin-left: ${({ marginLeft }) => marginLeft}rem;

  background-color: #ffffff;
  color: #000000;
  height: ${({ headerHeight }) => headerHeight}rem;
  margin-left: var(--app-header-margin-left);
  width: calc(100% - var(--app-header-margin-left));

  & .MuiToolbar-regular {
    height: 100%;
  }
`;
