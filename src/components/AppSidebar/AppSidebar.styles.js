import styled from "@emotion/styled";
import { Drawer } from "@mui/material";
import { darkestBgColor, darkBgColor } from "../../theme";

export const SAppSidebar = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "width",
})`
  --app-sidebar-width: ${({ width }) => width}rem;

  flex-shrink: 0;
  width: var(--app-sidebar-width);

  & .MuiDrawer-paper {
    background-color: ${darkestBgColor};
    box-sizing: border-box;
    width: var(--app-sidebar-width);
  }
`;

export const SAppSidebarHeader = styled.div`
  align-items: center;
  background-color: ${darkBgColor};
  display: flex;
  justify-content: justify-content;
  height: ${({ headerHeight }) => headerHeight}rem;

  & .MuiCardHeader-content {
    align-items: flex-start;
    color: #ffffff;
    display: flex;
    flex-direction: column;
  }

  & .MuiCardHeader-action {
    align-self: auto;
  }
`;
