import axios from "axios";
import { showToast } from "../../components/commonToast/toastService";
import { APIService } from "../api/ApiService";
import {
  getTableDataReducer,
  manualUploadDataReducer,
  manualUploadFileReducer,
} from "../slice/userSlice";

export function apiHelper(apiReducer, method, apiURL, data = "") {
  return async (dispatch) => {
    dispatch(apiReducer({ isLoading: true }));
    APIService(method, apiURL, data)
      .then((e) => {
        dispatch(apiReducer({ apiData: e?.data, isLoading: false }));

        if (method === "POST") showToast("Added Data", "success");
        else if (method === "PUT") {
          showToast("Updated Data", "success");
        }
      })
      .catch((e) => {
        dispatch(apiReducer({ isLoading: false }));
        showToast(e?.message, "error");
      });
  };
}

export function manualUploadDataApi(data) {
  return apiHelper(manualUploadDataReducer, "POST", "/managedata/", data);
}

export function getManualUploadDataApi(id) {
  return apiHelper(getTableDataReducer, "GET", `/managedata/file/${id}/`);
}

// export function manualUploadFileApi(data) {
//   return apiHelper(manualUploadFileReducer, "POST", "/managedata/file/", data);
// }
export function manualUploadFileApi(formData) {
  return async (dispatch) => {
    dispatch(manualUploadFileReducer({ isLoading: true }));
    axios({
      method: "POST",
      url: "https://api-fetech.colan.in/managedata/file/",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((e) => {
        const { status, message, response } = e.data;
        if (status === 200 || status === "success" || status === 201) {
          dispatch(
            manualUploadFileReducer({ isLoading: false, response: response })
          );
        } else {
          dispatch(manualUploadFileReducer({ isLoading: false }));
        }
      })
      .catch((e) => {
        dispatch(manualUploadFileReducer({ isLoading: false }));
      });
  };
}
