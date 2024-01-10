import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userDetail: [],
    singInLoading: false,
  },
  reducers: {
    currentUserDetailReducer: (state, { payload }) => {
      state.userDetail = payload.userDetail;
      state.singInLoading = payload.singInLoading;
    },
  
  },
});


export const { currentUserDetailReducer} = authSlice.actions;
export const authSelector = (state) => state.auth;
const authReducer = authSlice.reducer;
export default authReducer;

