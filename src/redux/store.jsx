import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import authReducer from "./slice/authSlice";
import { adminReducer } from "./slice/adminSlice";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  admin: adminReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
