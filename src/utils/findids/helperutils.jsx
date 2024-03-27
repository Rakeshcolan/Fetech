import { ADMIN_BASE_URL, USER_BASE_URL } from "../../redux/api/configURL";

export const findDesignation = (method)=>{
    let designationText
    switch (method) {
      case 1:
        designationText = "Employee"
        break;
      case 2:
        designationText = "Manager"
        break;
    
      default:
        break;
    }
    return designationText
  }


  export function roleBasedURL(role){
    let roleurl;
    switch(role){
      case "Admin":
        roleurl = ADMIN_BASE_URL
        break;
      case "Subadmin":
        roleurl = ADMIN_BASE_URL
        break;
      default:
        roleurl = USER_BASE_URL
        break
    }
    return roleurl;
  }
  