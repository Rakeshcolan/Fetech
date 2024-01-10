import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    mydetails: [],
    userDetailLoading: false,
  },
  reducers: {
    getMyDetailReducer: (state, { payload }) => {
      state.mydetails = payload.userDetail;
      state.userDetailLoading = payload.isLoading;
    },
  },
});

export const { getMyDetailReducer } = userSlice.actions;
export const userSelector = (state) => state.user;
const userReducer = userSlice.reducer;
export default userReducer;
