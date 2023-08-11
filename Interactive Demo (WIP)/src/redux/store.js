// Creates the Redux store using the combined root reducer.
// It's configured to manage the state of the application.
// The store is the object that brings them together by allowing different parts of the 
// app to access & update the state managed by the Redux store.

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root.handler";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
