import { dispatch } from "d3-dispatch";
import { async } from "q";
import { APIService } from "../api/ApiService";
// import { router } from "next/router";
import { addSubAmdinsReducer, getMyAdminDetailReducer, getSubAdminReducer } from "../slice/adminSlice";

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


export function addSubAmdinsApi(data){
  return async (dispatch)=>{
    dispatch(addSubAmdinsReducer({ isLoading: true }));
   console.log("dataaa",data);
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

export function getSubAdminsApi(){
  return async (dispatch)=>{
    dispatch(getSubAdminReducer({isLoading:true}));
    APIService("GET",'/managedata/')
    .then((e)=>{
      dispatch(getSubAdminReducer(
        {subAdminData:e.data,
        isLoading:false}
    ))
    })
    .catch((e)=>{
      dispatch(getSubAdminReducer({isLoading:false}))
    })
  }
}