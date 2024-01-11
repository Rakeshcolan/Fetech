import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminDetail: [],
    adminDataLoading: false,
    subAdminDetail:[],
    
  },
  reducers: {
    getMyAdminDetailReducer: (state, { payload }) => {
      state.adminDetail = payload.adminDetail;
      state.adminDataLoading = payload.isLoading;
    },
    addSubAmdinsReducer:(state,{payload})=>{
      const {subAdminDetail,isLoading} = payload;
      console.log("subAm",subAdminDetail);
      state.subAdminDetail = subAdminDetail;
      state.adminDataLoading = isLoading;
    }
  },
});

export const { getMyAdminDetailReducer,addSubAmdinsReducer } = adminSlice.actions;

export const adminSelector = (state) => state.admin;
export const adminReducer = adminSlice.reducer;
