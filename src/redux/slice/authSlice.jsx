import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginDetail: [],
    loginDetailisLoading: false,
    registerDetail: [],
    registerDetailisLoading: false,
  },
  reducers: {
    loginApiReducer: (state, { payload }) => {
      state.loginDetail = payload.loginDetail;
      state.loginDetailisLoading = payload.loginDetailisLoading;
    },
    registerApiReducer: (state, { payload }) => {
      state.registerDetail = payload.registerDetail;
      state.registerDetailisLoading = payload.registerDetailisLoading;
    },
  },
});

export const { loginApiReducer,registerApiReducer } = authSlice.actions;
export const authSelector = (state) => state.auth;
const authReducer = authSlice.reducer;
export default authReducer;

