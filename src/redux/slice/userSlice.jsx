import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    mydetails: [],
    userDetailLoading: false,
    manualUpload: [],
    manualUploadLoading: false,
    getTableData: [],
    getTableDataLoading: false,
    fileData: "",
    fileDataLoading: false,
  },

  reducers: {
    getMyDetailReducer: (state, { payload }) => {
      state.mydetails = payload.userDetail;
      state.userDetailLoading = payload.isLoading;
    },
    manualUploadDataReducer: (state, { payload }) => {
      state.manualUpload = payload.apiData;
      state.manualUploadLoading = payload.isLoading;
    },
    getTableDataReducer: (state, { payload }) => {
      console.log("payyyyyyyyyyyyloaaaaaaaa",payload);
      state.getTableData = payload.apiData;
      state.getTableDataLoading = payload.isLoading;
    },
    manualUploadFileReducer: (state, { payload }) => {
      state.fileData = payload.apiData;
      state.fileDataLoading = payload.isLoading;
    },
  },
});

export const {
  getMyDetailReducer,
  manualUploadDataReducer,
  getTableDataReducer,
  manualUploadFileReducer,
} = userSlice.actions;
export const userSelector = (state) => state.user;
const userReducer = userSlice.reducer;
export default userReducer;
