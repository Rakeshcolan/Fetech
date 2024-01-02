import React, { useState } from "react";
import CommonTextFields from "../common/Field/CommonTextFIelds";
import CustomizedTables from "../common/commonTable";
import {
  RoleAuthoriZationData,
  RoleAuthoriZationHead,
} from "../common/tableData";
import { Button } from "react-bootstrap";

const AddRoles = () => {
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);

  const paginationRowsOptions = [5, 10, 20, 50, 100];

  const handlePerRowsChange = async (event) => {
    setPage(+event.target.value);
    setSize(0);
  };

  const handlePageChange = async (event, newPage) => {
    setPage(newPage);
  };
  return (
    <div>
      <h4>Add Role</h4>
      <div>
        <CommonTextFields label="Role Name" id="RoleName" />
      </div>
      <h4>Grant Authorizations</h4>
      <CustomizedTables
        columns={RoleAuthoriZationHead}
        rows={RoleAuthoriZationData}
        paginationStatus={true}
        rowsPerPageOptions={paginationRowsOptions}
        page={page}
        size={size}
        handleChangePage={handlePageChange}
        handleChangeRowsPerPage={handlePerRowsChange}
      />
        <div className="contentCenter">
          <Button className="submitBtn">Confirm</Button>
        </div>
    </div>
  );
};

export default AddRoles;
