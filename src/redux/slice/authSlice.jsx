import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginDetail: [],
    loginDetailisLoading: false,
  },
  reducers: {
    loginApiReducer: (state, { payload }) => {
      state.loginDetail = payload.loginDetail;
      state.loginDetailisLoading = payload.loginDetailisLoading;
    },
  },
});


export const { loginApiReducer} = authSlice.actions;
export const authSelector = (state) => state.auth;
const authReducer = authSlice.reducer;
export default authReducer;

