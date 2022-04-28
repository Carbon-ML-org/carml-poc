import { configureStore } from "@reduxjs/toolkit";
import { reducer as productReducer } from "./product/product.slice";

const store = configureStore({
  devTools: true,
  reducer: {
    product: productReducer,
  },
});

export default store;
