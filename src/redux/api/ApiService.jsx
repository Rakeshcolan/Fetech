import axios from "axios";
import { showToast } from "../../components/commonToast/toastService";
import { USER_BASE_URL, ADMIN_BASE_URL } from "./configURL";

export const APIService = async (method, url, body, params) => {
  const roles =
  typeof window !== "undefined" ? sessionStorage.getItem("roles") : "" ;
  const accessToken =
  typeof window !== "undefined" ? sessionStorage.getItem("act") : "";
  const obj = {
    ADMIN: ADMIN_BASE_URL,
    USER: USER_BASE_URL,
  };
   function baseUrl(roles) {
    return obj[roles];
  }
  if (window.navigator.onLine) {
    return await axios({
      method: method,
      baseURL: baseUrl(roles) ,
      url: url,
      headers: {
        // Authorization: accessToken,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: body,
      params: params && params,
    })
      .then((e) => {
        if (roles === null || undefined || "") {
          sessionStorage.clear()
          // navigate('/')
        } else if (e.status === 200 || e.status === 201) {
          return {
            status: "success",
            data: e?.data,
          };
        } else {
          return {
            status: "error",
            message: e.status && e.statusText,
          };
        }
      })
      .catch((e) => {
        console.log("ERROR OCCURED", e);
        if (e.message === "Network Error") {
          // navigate("/common/networkIssue");
          showToast(e.message,"error")
        } 
        else if(e?.response?.status === 400){
          // showToast(e?.response?.data,"error")
          showToast("please check the credentials","error")
        }
        
        else if (e.response.status === 401 || e.response.status === 403) {
          // UNCOMMENT THIS CODE WHEN API IS READY
          // const refreshToken =
          //   typeof window !== "undefined"
          //     ? sessionStorage.getItem("refreshToken")
          //     : "";
          // if (e.response.status === 401) {
          //   axios
          //     .post(`${AUTH_BASE_URL}/refreshtoken/${refreshToken}`)
          //     .then((token) => {
          //       const { data } = token;
          //       sessionStorage.setItem(
          //         "accessToken",
          //         "Bearer " + data.accessToken
          //       );
          //       sessionStorage.setItem("refreshToken", data.refreshToken);
          //       router.reload(window.location.pathname);
          //     });
          // }

          // REMOVE THIS CODE WHEN API IS READY
          // errorMessage(e?.response?.data?.httpStatus);
          // navigate("/auth/login");
          sessionStorage.clear();
          localStorage.clear();
        }
        if (roles === null || undefined || "") {
          // navigate("/auth/login");
        }
      });
  } else {
    // navigate("/common/internetIssue");
  }
};
