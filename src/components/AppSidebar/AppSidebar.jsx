import React from "react";
import { SAppSidebar, SAppSidebarHeader } from "./AppSidebar.styles";

function AppSidebar({ open = true }) {
  return (
    <SAppSidebar anchor="left" open={open} variant="persistent">
      <SAppSidebarHeader>
        <p>User here.</p>
      </SAppSidebarHeader>
    </SAppSidebar>
  );
}

export default AppSidebar;
