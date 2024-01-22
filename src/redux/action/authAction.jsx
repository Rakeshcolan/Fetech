import { loginApiReducer } from "../slice/authSlice";
import { apiHelper } from "./adminAction";

export function addLoginApi(body) {
  return apiHelper(loginApiReducer, "POST", "/login/", body);
}
