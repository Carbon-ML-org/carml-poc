import React from "react";
import { Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import AppSidebar from "../AppSidebar/AppSidebar";
import AppMain from "../AppMain/AppMain";

function AppLayout() {
  return (
    <Paper
      sx={{
        bgcolor: "#ebedf0",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      <AppHeader />
      <AppSidebar />
      <AppMain>
        <Outlet />
      </AppMain>
    </Paper>
  );
}

export default AppLayout;
