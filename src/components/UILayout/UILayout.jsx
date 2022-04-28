import React from "react";
import { Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

function UILayout() {
  return (
    <Paper
      sx={{
        bgcolor: "#fafafa",
        minHeight: "100vh",
      }}
    >
      <AppBar />
      <Outlet />
    </Paper>
  );
}

export default UILayout;
