import axios from "axios";
import { showToast } from "../../components/commonToast/toastService";
import { AUTH_BASE_URL } from "../api/configURL";
import { forgotApiReducer, loginApiReducer, registerApiReducer } from "../slice/authSlice";

export function addLoginApi(body, navigate) {
  return async (dispatch) => {
    dispatch(loginApiReducer({ isLoading: true }));
    axios
      .post(`${AUTH_BASE_URL}/api/login/`, body)
      .then((e) => {
        let userrole = e?.data?.UserRoles
        dispatch(loginApiReducer({ apiData: e?.data, isLoading: false }));
        sessionStorage.setItem("roles", userrole);
        sessionStorage.setItem("ur", userrole=="Admin"||userrole==="Subadmin"?2:1);
        sessionStorage.setItem("UId", e?.data?.Login_id)
        navigate("/dashboard");
        showToast("Login Success", "success");
      })
      .catch((e) => {
        let err = e?.response?.data?.detail || e?.message
        dispatch(loginApiReducer({ isLoading: false }));
        showToast(err,"error");
      });
  };
  // return apiHelper(loginApiReducer, "POST", "/login/", body);
}

export function addRegisterApi(body, navigate) {
  // return apiHelper(registerApiReducer, "POST", "/register/", body);
  return async (dispatch) => {
    dispatch(registerApiReducer({ isLoading: true }));
    axios
      .post(`${AUTH_BASE_URL}/register/`, body)
      .then((e) => {
        if (e?.status === 200 || e?.status === 201 || e?.status === "success") {
          dispatch(registerApiReducer({ apiData: e.data, isLoading: false }));
          navigate("/payment");
          showToast("Registration Success", "success");
        } else {
          showToast(e.response.data.username[0],"error");
        }
      })
      .catch((e) => {
        dispatch(registerApiReducer({ isLoading: false }));
        showToast(e.response.data.username[0],"error");
      });
  };
}

export const ForgotPasswordApi=(body,navigate)=>{
  return async (dispatch) => {
    dispatch(forgotApiReducer({ isLoading: true }));
    axios
      .post(`${AUTH_BASE_URL}/api/forgot/`, body)
      .then((e) => {
        if (e?.status === 200 || e?.status === 201 || e?.status === "success") {
          dispatch(forgotApiReducer({ apiData: e.data, isLoading: false }));
          navigate("/");
          showToast("New Password Updated", "success");
        } else {
          showToast(e.response.data.username[0],"error");
        }
      })
      .catch((e) => {
        dispatch(forgotApiReducer({ isLoading: false }));
        showToast(e.response.data.detail,"error");
      });
  };
}