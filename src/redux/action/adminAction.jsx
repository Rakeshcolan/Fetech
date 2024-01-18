
import { showToast } from "../../components/commonToast/toastService";
import { APIService } from "../api/ApiService";
// import { router } from "next/router";
import {
  addClientApiReducer,
  addSubAmdinsReducer,
  addSubscriptionApiReducer,
  getClientApiReducer,
  getSubAdminReducer,
  getSubscriptionApiReducer,
  addCMSApiReducer
} from "../slice/adminSlice";

export function apiHelper(apiReducer, method, apiURL, data="") {
  return async (dispatch) => {
    dispatch(apiReducer({ isLoading: true }));
    APIService(method, apiURL,data)
    .then((e) => {
        dispatch(apiReducer({ apiData: e.data, isLoading: false }));
        showToast("Fetched", "success");
      })
      .catch((e) => {
        dispatch(apiReducer({ isLoading: false }));
        showToast("Error", "error");
      });
  };
}

export function addSubAmdinsApi(data) {
  return apiHelper(addSubAmdinsReducer,"POST", "/managedata/",data)
  // return async (dispatch) => {
  //   dispatch(addSubAmdinsReducer({ isLoading: true }));
  //   console.log("dataaa", data);
  //   APIService("POST", "/managedata/", data)
  //     .then((e) => {
  //       console.log("admindata", e);
  //       dispatch(
  //         addSubAmdinsReducer({
  //           subAdminDetail: e.data,
  //           isLoading: false,
  //         })
  //       );
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       dispatch(addSubAmdinsReducer({ isLoading: false }));
  //     });
  // };
}

export function getSubAdminsApi() {
  return apiHelper(getSubAdminReducer,"GET", "/managedata/")
  // return async (dispatch) => {
  //   dispatch(getSubAdminReducer({ isLoading: true }));
  //   APIService("GET", "/managedata/")
  //     .then((e) => {
  //       dispatch(
  //         getSubAdminReducer({ subAdminData: e.data, isLoading: false })
  //       );
  //     })
  //     .catch((e) => {
  //       dispatch(getSubAdminReducer({ isLoading: false }));
  //     });
  // };
}

export function addClientApi(body) {
  return apiHelper(addClientApiReducer,"POST", "/manageclients/",body)
}

export function getClientApi() {
  return apiHelper(getClientApiReducer,"GET", "/manageclients/")
}

export function subscriptionApi(body) {
  return apiHelper(addSubscriptionApiReducer,"POST", "/managesubscription/",body)
}

export function getSubscriptionApi() {
  return apiHelper(getSubscriptionApiReducer,"GET", "/managesubscription/")
}

export function addCMSApi(body) {
  return apiHelper(addCMSApiReducer,"POST", "/managecms/",body)
}



