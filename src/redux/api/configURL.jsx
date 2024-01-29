let baseURL = "http://192.168.2.110:5000"
export const AUTH_BASE_URL = process.env.AUTH_BASE_URL
  ? process.env.AUTH_BASE_URL
  : baseURL;
export const USER_BASE_URL = process.env.REACT_USER_BASE_URL
  ? process.env.REACT_USER_BASE_URL
  : baseURL;
export const ADMIN_BASE_URL = process.env.REACT_ADMIN_BASE_URL
  ? process.env.REACT_ADMIN_BASE_URL
  : baseURL;
