import { configureStore } from "@reduxjs/toolkit";
import { reducer as uiReducer } from "./ui/ui.slice";
import { reducer as messageTypeReducer } from "./messageType/messageType.slice";

const store = configureStore({
  devTools: true,
  reducer: {
    ui: uiReducer,
    messageType: messageTypeReducer,
  },
});

export default store;
