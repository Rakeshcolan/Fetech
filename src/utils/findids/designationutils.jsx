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

  