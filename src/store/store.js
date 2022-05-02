import { configureStore } from "@reduxjs/toolkit";
import { reducer as messageTypeReducer } from "./messageType/messageType.slice";

const store = configureStore({
  devTools: true,
  reducer: {
    messageType: messageTypeReducer,
  },
});

export default store;
