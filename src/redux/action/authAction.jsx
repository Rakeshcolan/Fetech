import axios from "axios";
import { showToast } from "../../components/commonToast/toastService";
import { APIService } from "../api/ApiService";
import { AUTH_BASE_URL } from "../api/configURL";
import { loginApiReducer, registerApiReducer } from "../slice/authSlice";


export function apiHelper(apiReducer, method, apiURL, data="") {
  return async (dispatch) => {
    dispatch(apiReducer({ isLoading: true }));
    APIService(method, apiURL,data)
    .then((e) => { 
        dispatch(apiReducer({ apiData: e.data, isLoading: false }));
        // showToast("Fetched", "success");
      })
      .catch((e) => {
        dispatch(apiReducer({ isLoading: false }));
        showToast("Error", "error");
      });
  };
}

// export function addLoginApi(body) {
//   return apiHelper(loginApiReducer, "POST", "/login/", body);
// }

// export function registerApi(body) {
//   return apiHelper(registerApiReducer, "POST", "/register/", body);
// }



export function registerApi(body,navigate) {
  return async (dispatch) => {
    dispatch(registerApiReducer({ isLoading: true }));
    axios
      .post(`${AUTH_BASE_URL}/register/`, body)
      .then((e) => {
        if (e.status === 201) {
          dispatch(registerApiReducer({ isLoading: false }));
          showToast("Registered Successfully", "success");
          navigate('/')
        }
      })
      .catch((e) => {
        dispatch(registerApiReducer({ isLoading: false }));
        showToast("Not Registered", "error");
      });
  };
}
export function addLoginApi(body,navigate) {
  return async (dispatch) => {
    dispatch(loginApiReducer({ isLoading: true }));
    axios
      .post(`${AUTH_BASE_URL}/login/`, body)
      .then((e) => {
        if (e.status === 201) {
          dispatch(loginApiReducer({ isLoading: false }));
          showToast("Welcom Back", "success");
          window.sessionStorage.setItem("access", e?.data?.token);
          window.sessionStorage.setItem("ur",e?.data?.UserRoles );
          navigate("/");
        }
      })
      .catch((e) => {
        dispatch(loginApiReducer({ isLoading: false }));
        console.log("eroor",e);
      });
  };
}
