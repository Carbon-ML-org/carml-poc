import React from "react";
import { useSelector } from "react-redux";
import { Button, List, ListItem } from "@mui/material";
import AppUsername from "../AppUsername/AppUsername";
import { SAppSidebar, SAppSidebarHeader } from "./AppSidebar.styles";

function AppSidebar() {
  const { sidebarIsOpen, sidebarWidth, headerHeight } = useSelector(
    (state) => state.ui
  );
  console.log("sidebarIsOpen:", sidebarIsOpen);

  return (
    <SAppSidebar
      anchor="left"
      open={sidebarIsOpen}
      variant="persistent"
      width={sidebarWidth}
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
