import React, { useState } from "react";
import CommonTextFields from "../../../components/common/Field/CommonTextFIelds";
import CustomizedTables from "../../../components/common/commonTable";
import {
  RoleAuthoriZationData,
  RoleAuthoriZationHead,
} from "../../../components/common/tableData";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddRoles = () => {
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);
  const navigate = useNavigate();
  const handlerowchange = (value,row)=>{
    console.log("valueee",row);
  }
  const handleConfirm = ()=>{
    navigate('/dashboard/roles')
  }
  return (
    <div className="commonbox">
      <h4>Add Role</h4>
      <div className="row">
        <div className="col-lg-6">
          <CommonTextFields label="Role Name" id="RoleName" />
        </div>
      </div>
      <br />
      <h4>Grant Authorizations</h4>
      <br />
      <CustomizedTables
        columns={RoleAuthoriZationHead}
        rows={RoleAuthoriZationData}
        paginationStatus={true}
        // rowsPerPageOptions={paginationRowsOptions}
        page={page}
        size={size}
        handleChange={handlerowchange}
        // dataLoading = {adminDataLoading}
    
      />
      <div className="contentCenter">
        <Button className="submitBtn" onClick={handleConfirm}>Confirm</Button>
      </div>
    </div>
  );
};

export default AddRoles;
