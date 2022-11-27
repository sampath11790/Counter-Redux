import { createSlice } from "@reduxjs/toolkit";
const initialAuthstate = { isAuthentication: true };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthstate,
  reducers: {
    login(state) {
      state.isAuthentication = false;
    },
    logout(state) {
      state.isAuthentication = true;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice;
