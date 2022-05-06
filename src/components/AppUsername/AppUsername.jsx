import React, { useMemo, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { darkColor } from "../../theme";
import UIAvatar from "../UIAvatar/UIAvatar";
import getInitials from "../../utils/getNameInitials";
import getRandomColor from "../../utils/getRandomColor";
import { SAppUsername } from "./AppUsername.styles";

function AppUsername() {
  const { user, signOut } = useAuthenticator();
  const [anchorEl, setAnchorEl] = useState(null);
  const username = user?.attributes?.name;
  const avatarInitials = useMemo(() => getInitials(username), [username]);
  const avatarBgColor = useMemo(() => getRandomColor(), []);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!user) return null;

  return (
    <>
      <SAppUsername
        avatar={<UIAvatar bgColor={avatarBgColor}>{avatarInitials}</UIAvatar>}
        action={
          <IconButton
            aria-label="settings"
            sx={{ color: "#ffffff" }}
            onClick={handleMenu}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="body1">{user?.attributes?.name}</Typography>
        }
        subheader={
          <Typography variant="caption" color={darkColor}>
            {user?.attributes?.email}
          </Typography>
        }
      />
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={signOut}>Sign Out</MenuItem>
      </Menu>
    </>
  );
}

export default AppUsername;
