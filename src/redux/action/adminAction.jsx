import { showToast } from "../../components/commonToast/toastService";
import { APIService } from "../api/ApiService";
import { FileAPIService } from "../api/FileApiService";
// import { router } from "next/router";
import {
  addClientApiReducer,
  addSubAmdinsReducer,
  addSubscriptionApiReducer,
  getClientApiReducer,
  getSubAdminReducer,
  getSubscriptionApiReducer,
  addCMSApiReducer,
  getEarningsReducer,
  editSubscriptionApiReducer,
  addManageDataReducer,
  deleteClientReducer,
  addChatbotReducer,
  getChatbotReducer,
  getAllChatbotReducer,
  getChatbotByIdReducer,
  editChatBotByIdReducer,
} from "../slice/adminSlice";

export function apiHelper(apiReducer, method, apiURL, data = "") {
  return async (dispatch) => {
    dispatch(apiReducer({ isLoading: true }));
    APIService(method, apiURL, data)
      .then((e) => {
        console.log("chatbotdata",e);
          dispatch(apiReducer({ apiData: e?.data, isLoading: false }));
          method === "POST" && showToast("Added Data", "success");
      })
      .catch((e) => {
        dispatch(apiReducer({ isLoading: false }));
        showToast(e?.message, "error");
      });
  };
}

export function addSubAmdinsApi(data) {
  return apiHelper(addSubAmdinsReducer, "POST", "/managesubadmin/", data);
}

export function getSubAdminsApi() {
  return apiHelper(getSubAdminReducer, "GET", "/managesubadmin/");
}

export function addClientApi(body) {
  return apiHelper(addClientApiReducer, "POST", "/manageclients/", body);
}

export function getClientApi() {
  return apiHelper(getClientApiReducer, "GET", "/manageclients/");
}

export function subscriptionApi(body) {
  return apiHelper(
    addSubscriptionApiReducer,
    "POST",
    "/managesubscription/",
    body
  );
}

export function getSubscriptionApi() {
  return apiHelper(getSubscriptionApiReducer, "GET", "/managesubscription/");
}

export function editSubscriptionApi(data, id) {
  return apiHelper(
    editSubscriptionApiReducer,
    "PUT",
    `/managesubscription/${id}/`,
    data
  );
}

export function addCMSApi(body) {
  // return apiHelper(addCMSApiReducer,"POST", "/managecms/",body)
  return async (dispatch) => {
    dispatch(addCMSApiReducer({ isLoading: true }));
    FileAPIService("POST", "/managecms/", body)
      .then((e) => {
        dispatch(addCMSApiReducer({ apiData: e.data, isLoading: false }));
        showToast("Files Added Successfully", "success");
      })
      .catch((e) => {
        dispatch(addCMSApiReducer({ isLoading: false }));
        showToast("Error", "error");
      });
  };
}

export function getEarningsApi() {
  return apiHelper(getEarningsReducer, "GET", "/earnings/");
}

export function addManageDataApi() {
  return apiHelper(addManageDataReducer, "GET", "/managedata/");
}

export function addChatBotApi(data){
  console.log("chatbotdataneeeee",data);
  return apiHelper(addChatbotReducer,"POST",'/managechatbot/',data)
}

export function getChatBotApi(id){
  return apiHelper(getChatbotReducer,"GET",`/managechatbot/${id}`)
}
export function getallChatBotApi(){
  return apiHelper(getAllChatbotReducer,"GET",`/managechatbot/`)
}


export function deleteClientApi(id){
  return apiHelper(deleteClientReducer,'DELETE',`/manageclients/${id}`)
}

export function getChatBotByIdApi(id){
  return apiHelper(getChatbotByIdReducer,'GET',`/managechatbot/${id}/`)
}

export function editChatByIdApi(id,data){
  return apiHelper(editChatBotByIdReducer,"PUT",`/managechatbot/${id}/`,data)
}