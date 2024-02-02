import axios from "axios";
import { showToast } from "../../components/commonToast/toastService";
import { APIService } from "../api/ApiService";
import { AUTH_BASE_URL } from "../api/configURL";
import { loginApiReducer, registerApiReducer } from "../slice/authSlice";
import { apiHelper } from "./adminAction";

export function addLoginApi(body, navigate) {
  return async (dispatch) => {
    dispatch(loginApiReducer({ isLoading: true }));
    axios
      .post(`${AUTH_BASE_URL}/api/login/`, body)
      .then((e) => {
        dispatch(loginApiReducer({ apiData: e?.data, isLoading: false }));
        sessionStorage.setItem("roles", e?.data?.UserRoles === "Admin"?"ADMIN":"USER");
        sessionStorage.setItem("ur", e?.data?.UserRoles === "Admin"?2:1);
        navigate("/");
        showToast("Login Success", "success");
      })
      .catch((e) => {
        dispatch(loginApiReducer({ isLoading: false }));
        showToast("Error in Login", "error");
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
          showToast(e?.message, "error");
        }
      })
      .catch((e) => {
        dispatch(registerApiReducer({ isLoading: false }));
        showToast(e.message, "error");
      });
  };
}
