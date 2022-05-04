import styled from "@emotion/styled";
import { Drawer } from "@mui/material";

export const SAppSidebar = styled(Drawer)`
  width: 15rem;
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: 15rem;
    box-sizing: border-box;
  }
`;

export const SAppSidebarHeader = styled.div`
  display: flex;
  alignitems: center;
`;
