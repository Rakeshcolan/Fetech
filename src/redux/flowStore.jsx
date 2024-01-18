import { combineReducers, configureStore } from "@reduxjs/toolkit";
import flowReducer from "./slice/flowSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from "./slice/userSlice";
import authReducer from "./slice/authSlice";
import { adminReducer } from "./slice/adminSlice";
// import { getDefaultMiddleware } from '@reduxjs/toolkit';


const persistConfig = {
    key: 'root',
    storage,
  }
 const persistedReducer = persistReducer(persistConfig, flowReducer);


 const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    admin: adminReducer,
    flow:persistedReducer,
  }); 

export const flowStore = configureStore({
    reducer:rootReducer,
    // middleware: getDefaultMiddleware({
    //     serializableCheck: false,
    //   }),
})

export const persistor = persistStore(flowStore)