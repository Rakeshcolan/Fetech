import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    subAdminDetail: [],
    clientDetail: [],
    clientDetailisLoading: false,
    getClientDetail: [],
    getClientDetailisLoading: false,
    getallSubAdminDetail: [],
    subscriptionDetail: [],
    subscriptionDetailisLoading: false,
    getSubscriptionDetail: [],
    getSubscriptionDetailisLoading: false,
  },
  reducers: {
    addSubAmdinsReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.subAdminDetail = apiData;
      state.adminDataLoading = isLoading;
    },
    getSubAdminReducer: (state, { payload }) => {
      const { apiData, isLoading } = payload;
      state.getallSubAdminDetail = apiData;
      state.adminDataLoading = isLoading;
    },

    addClientApiReducer: (state, { payload }) => {
      state.clientDetail = payload.apiData;
      state.clientDetailisLoading = payload.isLoading;
    },
    getClientApiReducer: (state, { payload }) => {
      state.getClientDetail = payload.apiData;
      state.getClientDetailisLoading = payload.isLoading;
    },
    addSubscriptionApiReducer: (state, { payload }) => {
      state.subscriptionDetail = payload.apiData;
      state.subscriptionDetailisLoading = payload.isLoading;
    },
    getSubscriptionApiReducer: (state, { payload }) => {
      state.getSubscriptionDetail = payload.apiData;
      state.getSubscriptionDetailisLoading =
        payload.isLoading;
    },
  },
});

export const {
  getMyAdminDetailReducer,
  addSubAmdinsReducer,
  addClientApiReducer,
  getClientApiReducer,
  addSubscriptionApiReducer,
  getSubscriptionApiReducer,
  getSubAdminReducer,
} = adminSlice.actions;

export const adminSelector = (state) => state.admin;
export const adminReducer = adminSlice.reducer;
