import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./messageType.constants";
import { getMessageType } from "./messageType.actions";

const messageTypeSlice = createSlice({
  name: "messageType",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
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
        state.messageType = action.payload;
      })
      .addCase(getMessageType.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const reducer = messageTypeSlice.reducer;
