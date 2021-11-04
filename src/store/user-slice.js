import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getTokenFromStorage = createAsyncThunk("getToken", () => {
  return localStorage.getItem("token");
});
const removeTokenFromStorage = createAsyncThunk("getToken", () => {
  return localStorage.removeItem("token");
});

const initialState = {
  token: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, { payload }) => {
      state.token = payload;
      state.isLoggedIn = true;
      localStorage.setItem("token", payload);
    },
    setUserLogoutState: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [getTokenFromStorage.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    [removeTokenFromStorage.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = false;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
