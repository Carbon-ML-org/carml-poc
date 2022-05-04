import React, { useState } from "react";
import { Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import AppSidebar from "../AppSidebar/AppSidebar";
import AppMain from "../AppMain/AppMain";

function AppLayout() {
  const [open, setOpen] = useState(true);

  return (
    <Paper
      sx={{
        bgcolor: "#fafafa",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <AppBar />
      <AppSidebar open={open} />
      <AppMain>
        <Outlet />
      </AppMain>
    </Paper>
  );
}

export default AppLayout;
