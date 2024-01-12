import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    adminDetail: [],
    adminDataLoading: false,
    addsubAdminDetail:[],
    getallSubAdminDetail:[]
  },
  reducers: {
    getMyAdminDetailReducer: (state, { payload }) => {
      state.adminDetail = payload.adminDetail;
      state.adminDataLoading = payload.isLoading;
    },
    addSubAmdinsReducer:(state,{payload})=>{
      const {subAdminDetail,isLoading} = payload;
      state.addsubAdminDetail = subAdminDetail;
      state.adminDataLoading = isLoading;
    },
    getSubAdminReducer:(state,{payload})=>{
      const {subAdminData,isLoading} = payload;
      state.getallSubAdminDetail =subAdminData
      state.adminDataLoading = isLoading;
    }

  },
});

export const { getMyAdminDetailReducer,addSubAmdinsReducer,getSubAdminReducer } = adminSlice.actions;

export const adminSelector = (state) =>state.admin;
export const adminReducer = adminSlice.reducer;
