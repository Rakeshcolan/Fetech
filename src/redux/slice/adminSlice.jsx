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
      const { subAdminDetail, isLoading } = payload;
      state.subAdminDetail = subAdminDetail;
      state.adminDataLoading = isLoading;
    },
    getSubAdminReducer: (state, { payload }) => {
      const { subAdminData, isLoading } = payload;
      state.getallSubAdminDetail = subAdminData;
      state.adminDataLoading = isLoading;
    },

    addClientApiReducer: (state, { payload }) => {
      state.clientDetail = payload.ClientDetail;
      state.clientDetailisLoading = payload.clientDetailisLoading;
    },
    getClientApiReducer: (state, { payload }) => {
      state.getClientDetail = payload.getClientDetail;
      state.getClientDetailisLoading = payload.getClientDetailisLoading;
    },
    addSubscriptionApiReducer: (state, { payload }) => {
      state.subscriptionDetail = payload.subscriptionDetail;
      state.subscriptionDetailisLoading = payload.subscriptionDetailisLoading;
    },
    getSubscriptionApiReducer: (state, { payload }) => {
      state.getSubscriptionDetail = payload.getSubscriptionDetail;
      state.getSubscriptionDetailisLoading =
        payload.getSubscriptionDetailisLoading;
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
