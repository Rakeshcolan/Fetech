import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import authReducer from "./slice/authSlice";
import { adminReducer } from "./slice/adminSlice";
import flowReducer from "./slice/flowSlice";


const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  admin: adminReducer,
  flow:flowReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
