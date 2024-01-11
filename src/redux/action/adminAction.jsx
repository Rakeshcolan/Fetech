import { APIService } from "../api/ApiService";
// import { router } from "next/router";
import { addSubAmdinsReducer, getMyAdminDetailReducer } from "../slice/adminSlice";

export function getMyAdminDetailsApi() {
  return async (dispatch) => {
    dispatch(getMyAdminDetailReducer({ isLoading: true }));
    APIService("GET","/getAdminDetails")
      .then((e) => {
        dispatch(
          getMyAdminDetailReducer({
            adminDetail: e.data,
            isLoading: false,
          })
        );
      })
      .catch((e) => {
        console.log(e);
        dispatch(getMyAdminDetailReducer({ isLoading: false }));
      });
  };
}


export function addSubAmdinsApi(){
  return async (dispatch)=>{
    dispatch(addSubAmdinsReducer({ isLoading: true }));
    let data = {
      "first_name" : "Johne",
      "last_name" : "Davidwd",
      "email_id" : "john@johnes1.com",
      "mobile_no" : "9488556698",
      "status" : true,
      "designation" : 1
  }
    APIService("POST",'/managedata/',data)
    .then((e)=>{
      console.log("admindata",e);
      dispatch(
        addSubAmdinsReducer({
          subAdminDetail:e.data,
          isLoading:false
        })
      )
    })
    .catch((e) => {
      console.log(e);
      dispatch(addSubAmdinsReducer({ isLoading: false }));
})
  }
}