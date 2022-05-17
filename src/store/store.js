import { configureStore } from "@reduxjs/toolkit";
import { reducer as uiReducer } from "./ui/ui.slice";
import { reducer as messageTypesReducer } from "./messageTypes/messageTypes.slice";

const store = configureStore({
  devTools: true,
  reducer: {
    ui: uiReducer,
    messageTypes: messageTypesReducer,
  },
});

export default store;
