import React from "react";
import { useSelector } from "react-redux";
import { Button, List, ListItem } from "@mui/material";
import AppUsername from "../AppUsername/AppUsername";
import { SAppSidebar, SAppSidebarHeader } from "./AppSidebar.styles";

function AppSidebar() {
  const { sidebarIsOpen, sidebarWidth, headerHeight } = useSelector(
    (state) => state.ui
  );

  return (
    <SAppSidebar
      anchor="left"
      open={sidebarIsOpen}
      variant="persistent"
      width={sidebarIsOpen ? sidebarWidth : 0}
      transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
    >
      <SAppSidebarHeader headerHeight={headerHeight}>
        <AppUsername />
      </SAppSidebarHeader>
      <List>
        <ListItem>
          <Button disableElevation fullWidth variant="contained">
            New Message Type
          </Button>
        </ListItem>
      </List>
    </SAppSidebar>
  );
}

export default AppSidebar;
