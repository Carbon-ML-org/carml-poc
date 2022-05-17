import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import UIElevationScroll from "../UIElevationScroll/UIElevationScroll";
import { closeSidebar, openSidebar } from "../../store/ui/ui.actions";
import { SAppHeader } from "./AppHeader.styles";

function AppHeader() {
  const dispatch = useDispatch();
  const { sidebarIsOpen, sidebarWidth, headerHeight, pageTitle } = useSelector(
    (state) => state.ui
  );

  function handleMenuClick() {
    if (sidebarIsOpen) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  }

  return (
    <UIElevationScroll>
      <SAppHeader
        marginLeft={sidebarIsOpen ? sidebarWidth : 0}
        headerHeight={headerHeight}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {pageTitle}
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
