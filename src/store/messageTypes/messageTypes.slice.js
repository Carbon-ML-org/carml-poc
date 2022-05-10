import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./messageTypes.constants";
import { getMessageTypes, getMessageType } from "./messageTypes.actions";

const messageTypesSlice = createSlice({
  name: "messageTypes",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    /**
     * Get Message Types
     * ----------------------------------------------------------------
     */
    builder
      .addCase(getMessageTypes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMessageTypes.fulfilled, (state, action) => {
        state.status = "success";
        state.messageTypes = action.payload;
      })
      .addCase(getMessageTypes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    /**
     * Get Message Type
     * ----------------------------------------------------------------
     */
    builder
      .addCase(getMessageType.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMessageType.fulfilled, (state, action) => {
        state.status = "success";
        state.activeMessageType = action.payload;
      })
      .addCase(getMessageType.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const reducer = messageTypesSlice.reducer;
