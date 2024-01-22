import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginDetail: [],
    loginDetailisLoading: false,
    registerDetail:"",
    registerDetailisLoading:false
  },
  reducers: {
    loginApiReducer: (state, { payload }) => {
      state.loginDetail = payload.apiData;
      state.loginDetailisLoading = payload.isLoading;
    },
    registerApiReducer: (state, { payload }) => {
      state.registerDetail = payload.loginDetail;
      state.registerDetailisLoading = payload.loginDetailisLoading;
    },
  },
});


export const { loginApiReducer,registerApiReducer} = authSlice.actions;
export const authSelector = (state) => state.auth;
const authReducer = authSlice.reducer;
export default authReducer;

