import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./ui.constants";
import { openSidebar, closeSidebar } from "./ui.actions";

const uiSlice = createSlice({
  name: "ui",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    /**
     * Sidebar
     * ----------------------------------------------------------------
     */
    builder
      .addCase(openSidebar, (state) => {
        state.sidebarIsOpen = true;
      })
      .addCase(closeSidebar, (state) => {
        state.sidebarIsOpen = false;
      });
  },
});

export const reducer = uiSlice.reducer;
