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
  getRolesReducer,
  editSubAdminReducer,
  deleteReducer,
  deleteSubscriptionApiReducer,
  deleteChatbotReducer,
  getUserNameReducer,
} from "../slice/adminSlice";


export function apiHelper(apiReducer, method, apiURL, data = "",Toastmessage = "",giveToast=true) {
  return async (dispatch) => {
    dispatch(apiReducer({ isLoading: true }));
    APIService(method, apiURL, data)
      .then((e) => {
        dispatch(apiReducer({ apiData: e?.data, isLoading: false }));
        if(giveToast){
          if (method === "POST") showToast(`${Toastmessage} Added Successfully`, "success");
          else if (method === "PUT") {
            showToast("Updated Data", "success");
          }
        }
      })
      .catch((e) => {
        dispatch(apiReducer({ isLoading: false }));
        showToast(e?.message, "error");
      });
  };
}

export function addSubAmdinsApi(data) {
    return apiHelper(addSubAmdinsReducer, "POST", "/register/", data,"SubAdmin");
}
export function deleteRegisterApi(id) {
  
    return apiHelper(deleteReducer, "DELETE", `/register/${id}/`);
}

export function getSubAdminsApi(id) {
  return apiHelper(getSubAdminReducer, "GET", `/subadmin/?id=${id}`);
}

export function editSubAdminApi(id, data) {
  return apiHelper(editSubAdminReducer, "PUT", `/register/${id}/`, data);
}
//use it for later
// export function deleteSubAdminApi(){
//   return apiHelper(deleteSubAdminReducer, "GET", "/managesubadmin/");
// }
export function addClientApi(body) {
  // return apiHelper(addClientApiReducer, "POST", "/manageclients/", body); old code
  return apiHelper(addClientApiReducer, "POST", "/register/", body,"Client"); // saving without userid gives the client credentials
}

export function getClientApi() {
  return apiHelper(getClientApiReducer, "GET", "/client/");
}

export function subscriptionApi(body) {
  return apiHelper(
    addSubscriptionApiReducer,
    "POST",
    "/subscriptionplan/",
    body,
    "Subscription"
  );
}



export function getSubscriptionApi() {
  return apiHelper(getSubscriptionApiReducer, "GET", "/subscriptionplan/");
  // return apiHelper(getSubscriptionApiReducer, "GET", "/managesubscription/");
}

export function editSubscriptionApi(data, id) {
  return apiHelper(
    editSubscriptionApiReducer,
    "PUT",
    `/subscriptionplan/${id}/`,
    data
  );
}
export function deleteSubscriptionApi(id) {
  return apiHelper(
    deleteSubscriptionApiReducer,
    "DELETE",
    `/subscriptionplan/${id}/`
  );
}


export function addCMSApi(body) {
  // return apiHelper(addCMSApiReducer,"POST", "/managecms/",body)
  return async (call) => {
    call(addCMSApiReducer({ isLoading: true }));
    FileAPIService("POST", "/managecms/", body)
      .then((e) => {
        call(addCMSApiReducer({ apiData: e.data, isLoading: false }));
        showToast("Files Added Successfully", "success");
      })
      .catch((e) => {
        call(addCMSApiReducer({ isLoading: false }));
        showToast("Error", "error");
      });
  };
}

export function getEarningsApi() {
  return apiHelper(getEarningsReducer, "GET", "/earnings/");
}

export function addManageDataApi() {
  return apiHelper(addManageDataReducer, "GET", "/managedata/","User Data");
}

export function addChatBotApi(data) {
  return apiHelper(addChatbotReducer, "POST", "/managechatbot/", data,"Chatbot");
}

export function getChatBotApi(id) {
  return apiHelper(getChatbotReducer, "GET", `/managechatbot/${id}`);
}
export function getallChatBotApi() {
  return apiHelper(getAllChatbotReducer, "GET", `/managechatbot/`);
}

export function deleteChatbotApi(id){
  return apiHelper(deleteChatbotReducer,"DELETE",`/managechatbot/${id}/`)
}
// export function deleteClientApi(id) {
//   return apiHelper(deleteClientReducer, "DELETE", `/manageclients/${id}`);
// }

export function getChatBotByIdApi(id) {
  return apiHelper(getChatbotByIdReducer, "GET", `/managechatbot/${id}/`);
}

export function getUserNameExistApi(data){
  let body = {
    "username" :data
}
  return apiHelper(getUserNameReducer,"POST",'/username_exist/',body,"",false)
}

export function editChatByIdApi(id, data) {
  return apiHelper(
    editChatBotByIdReducer,
    "PUT",
    `/managechatbot/${id}/`,
    data
  );
}

export function getRolesApi() {
  return apiHelper(getRolesReducer, "GET", "/designation/");
}
