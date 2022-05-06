import React from "react";
import { useSelector } from "react-redux";
import { Toolbar, Typography } from "@mui/material";
import UIElevationScroll from "../UIElevationScroll/UIElevationScroll";
import { SAppHeader } from "./AppHeader.styles";

function AppHeader() {
  const { sidebarIsOpen, sidebarWidth, headerHeight } = useSelector(
    (state) => state.ui
  );

  return (
    <UIElevationScroll>
      <SAppHeader
        marginLeft={sidebarIsOpen ? sidebarWidth : 0}
        headerHeight={headerHeight}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Message Type
          </Typography>
        </Toolbar>
      </SAppHeader>
    </UIElevationScroll>
  );
}

AppHeader.defaultProps = {
  marginLeft: 0,
};

export default AppHeader;
