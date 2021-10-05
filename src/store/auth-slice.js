import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    modalMode: false,
    isLogin: true,
  },
  reducers: {
    openModal(state, action) {
      state.modalMode = !state.modalMode;
      state.isLogin = action.payload;
    },
    checkLoginMode(state) {
      state.isLogin = !state.isLogin;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
