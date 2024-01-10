import { APIService } from "../Api/APIService";
// import { router } from "next/router";
import { getMyAdminDetailReducer } from "../slice/adminSlice";

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
