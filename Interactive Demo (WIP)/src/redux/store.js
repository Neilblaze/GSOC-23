import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root.handler";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
