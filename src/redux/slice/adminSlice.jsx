import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminDetail: [],
    adminDataLoading: false,
  },
  reducers: {
    getMyAdminDetailReducer: (state, { payload }) => {
      state.adminDetail = payload.adminDetail;
      state.adminDataLoading = payload.isLoading;
    },
  },
});

export const { getMyAdminDetailReducer } = adminSlice.actions;

export const adminSelector = (state) => state.admin;
export const adminReducer = adminSlice.reducer;
