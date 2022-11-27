// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./Counter";
import authSlice from "./AuthStore";
const Store = configureStore({
  reducer: {
    counterKey: counterSlice.reducer,
    authkey: authSlice.reducer,
  },
});

export default Store;
