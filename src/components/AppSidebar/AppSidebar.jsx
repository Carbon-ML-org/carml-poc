import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, List, ListItem } from "@mui/material";
import AppUsername from "../AppUsername/AppUsername";
import MessageTypeDialog from "../MessageTypeDialog/MessageTypeDialog";
import { SAppSidebar, SAppSidebarHeader } from "./AppSidebar.styles";

function AppSidebar() {
  const { sidebarIsOpen, sidebarWidth, headerHeight } = useSelector(
    (state) => state.ui
  );
  const [messageTypeDialogIsOpen, openMessageTypeDialog] = useState(false);

  function handleNewMessageType() {
    openMessageTypeDialog(true);
  }

  function handleOnClose() {
    openMessageTypeDialog(false);
  }

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
          <Button
            disableElevation
            fullWidth
            onClick={handleNewMessageType}
            variant="contained"
          >
            New Message Type
          </Button>
        </ListItem>
      </List>
      <MessageTypeDialog
        open={messageTypeDialogIsOpen}
        onClose={handleOnClose}
      />
    </SAppSidebar>
  );
}

export default AppSidebar;
