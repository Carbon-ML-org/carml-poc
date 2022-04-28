import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./product.constants";
import { getProduct } from "./product.actions";

const productSlice = createSlice({
  name: "product",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    /**
     * Get Product
     * ----------------------------------------------------------------
     */
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.product = action.payload.product;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const reducer = productSlice.reducer;
