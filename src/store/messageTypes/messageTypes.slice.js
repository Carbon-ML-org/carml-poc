import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./messageTypes.constants";
import { getMessageTypes } from "./messageTypes.actions";

const messageTypesSlice = createSlice({
  name: "messageTypes",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    /**
     * Get Messages Type
     * ----------------------------------------------------------------
     */
    builder
      .addCase(getMessageTypes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMessageTypes.fulfilled, (state, action) => {
        state.status = "sucess";
        state.messageTypes = action.payload;
      })
      .addCase(getMessageTypes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const reducer = messageTypesSlice.reducer;
