import { configureStore } from "@reduxjs/toolkit";
import { reducer as uiReducer } from "./ui/ui.slice";
import { reducer as messageTypeReducer } from "./messageType/messageType.slice";
import { reducer as messageTypesReducer } from "./messageTypes/messageTypes.slice";

const store = configureStore({
  devTools: true,
  reducer: {
    ui: uiReducer,
    messageType: messageTypeReducer,
    messageTypes: messageTypesReducer,
  },
});

export default store;
