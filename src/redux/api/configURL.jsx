// let baseURL = "http://192.168.2.110:5000"
export const AUTH_BASE_URL = process.env.REACT_APP_AUTH_BASE_URL
  ? process.env.REACT_APP_AUTH_BASE_URL
  :"";
export const USER_BASE_URL = process.env.REACT_APP_USER_BASE_URL
  ? process.env.REACT_APP_USER_BASE_URL
  : "";
export const ADMIN_BASE_URL = process.env.REACT_APP_ADMIN_BASE_URL
  ? process.env.REACT_APP_ADMIN_BASE_URL
  : "";
