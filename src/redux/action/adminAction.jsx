
import { APIService } from "../api/ApiService";
// import { router } from "next/router";
import {
  addClientApiReducer,
  addSubAmdinsReducer,
  addSubscriptionApiReducer,
  getClientApiReducer,
  getSubAdminReducer,
  getSubscriptionApiReducer,
} from "../slice/adminSlice";

// export function addSubAmdinsApi() {
//   return async (dispatch) => {
//     dispatch(addSubAmdinsReducer({ isLoading: true }));
//     let data = {
//       first_name: "Johne",
//       last_name: "Davidwd",
//       email_id: "john@johnes1.com",
//       mobile_no: "9488556698",
//       status: true,
//       designation: 1,
//     };
//     APIService("POST", "/managedata/", data)
//       .then((e) => {
//         console.log("admindata", e);
//         dispatch(
//           addSubAmdinsReducer({
//             subAdminDetail: e.data,
//             isLoading: false,
//           })
//         );
//       })
//       .catch((e) => {
//         console.log(e);
//         dispatch(addSubAmdinsReducer({ isLoading: false }));
//       });
//   };
// }

export function addClientApi(body) {
  return async (dispatch) => {
    dispatch(addClientApiReducer({ isLoading: true }));
    APIService("POST", "/manageclients/", body)
      .then((e) => {
        dispatch(
          addClientApiReducer({
            clientDetail: e.data,
            isLoading: false,
          })
        );
      })
      .catch((e) => {
        console.log(e);
        dispatch(addClientApiReducer({ isLoading: false }));
      });
  };
}

export function getClientApi() {
  return async (dispatch) => {
    dispatch(getClientApiReducer({ isLoading: true }));
    APIService("GET", "/manageclients/")
      .then((e) => {
        dispatch(
          getClientApiReducer({
            getClientDetail: e.data,
            isLoading: false,
          })
        );
      })
      .catch((e) => {
        console.log(e);
        dispatch(addClientApiReducer({ isLoading: false }));
      });
  };
}

export function subscriptionApi(body) {
  return async (dispatch) => {
    dispatch(addSubscriptionApiReducer({ isLoading: true }));
    APIService("POST", "/managesubscription/",body)
      .then((e) => {
        dispatch(
          addSubscriptionApiReducer({
            subscriptionDetail: e,
            isLoading: false,
          })
        );
      })
      .catch((e) => {
        console.log(e);
        dispatch(addSubscriptionApiReducer({ isLoading: false }));
      });
  };
}

export function getSubscriptionApi() {
  return async (dispatch) => {
    dispatch(getSubscriptionApiReducer({ isLoading: true }));
    APIService("GET", "/managesubscription/")
      .then((e) => {
        dispatch(
          getSubscriptionApiReducer({
            getSubscriptionDetail: e.data,
            isLoading: false,
          })
        );
      })
      .catch((e) => {
        dispatch(getSubscriptionApiReducer({ isLoading: false }));
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

