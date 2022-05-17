import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./ui.constants";
import { openSidebar, closeSidebar, updatePageTitle } from "./ui.actions";

const uiSlice = createSlice({
  name: "ui",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    /**
     * Page
     * ----------------------------------------------------------------
     */
    builder.addCase(updatePageTitle, (state, action) => {
      state.pageTitle = action.payload;
    });

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
