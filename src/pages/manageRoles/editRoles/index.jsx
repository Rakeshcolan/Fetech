import CommonTextFields from "../../../components/common/Field/CommonTextFIelds";
import * as Yup from "yup";

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { EditRole, RoleAuthoriZationData, RoleAuthoriZationHead } from "../../../components/common/tableData";
import CustomizedTables from "../../../components/common/commonTable";


const EditRoles = () => {
    const [editRoles,setEditRoles] = useState(RoleAuthoriZationData)
const location = useLocation();
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/dashboard/subadmin");
  };

useEffect(()=>{
    // setEditRoles([...editRoles,location.state?.data] )
   return ()=>{
    location.state ="";
    setEditRoles({})
   }
},[])




  return (
    <div className="commonbox">
      <h4>Edit Roles</h4>
      <CustomizedTables
        columns={RoleAuthoriZationHead}
        rows={RoleAuthoriZationData}
      />
      <div className="contentCenter">
        <Button className="submitBtn">Confirm</Button>
      </div>
    </div>
  );
};

export default EditRoles;
