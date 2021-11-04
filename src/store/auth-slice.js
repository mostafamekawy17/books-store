import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    modalMode: false,
    isLogin: true,
    errorMessage: "",
  },
  reducers: {
    openModal(state, action) {
      state.modalMode = !state.modalMode;
      state.isLogin = action.payload;
    },
    checkLoginMode(state) {
      state.isLogin = !state.isLogin;
      state.errorMessage = "";
    },
    errorMessageHandler(state) {
      state.errorMessage = "Sorry, your email and your password was incorrect.";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
