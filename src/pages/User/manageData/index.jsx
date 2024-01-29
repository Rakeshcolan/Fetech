import { Button } from "@mui/material";
import { useState } from "react";
import CommonTextFields from "../../../components/common/Field/CommonTextFIelds";
import CommonUpload from "../../../components/common/Field/CommonUpload";
import CustomizedTables from "../../../components/common/commonTable";
import {
  manageDataTableData,
  manageDataTableHead,
} from "../../../components/common/tableData";
import DynamicField from "../../../components/common/Field/DynamicField";

const ManageData = () => {
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
    <div className="commonbox">
      <h4>Upload Data</h4>
      <CommonUpload />
      <br />
      <h4>Manual Upload Data</h4>
      <div className="contentEnd">
        <Button className="addBtn">+Add</Button>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <CommonTextFields label="First Name" id="Name" />
          <br />
          <CommonTextFields label="PhoneNumber" id="PhoneNumber" />
          <br />
          <CommonTextFields label="Email" id="Email" />
        </div>
        <div className="col-lg-6">
          <CommonTextFields label="Last Name" id="Name" />
          <br />
          <CommonTextFields label="Email" id="Email" />
          <br />
          <DynamicField />
        </div>
      </div>
      <br />
      <div>
        <CustomizedTables
          columns={manageDataTableHead}
          rows={manageDataTableData}
          paginationStatus={true}
          rowsPerPageOptions={paginationRowsOptions}
          page={page}
          size={size}
          handleChangePage={handlePageChange}
          handleChangeRowsPerPage={handlePerRowsChange}
        />
      </div>
      <div className="contentCenter">
        <Button className="submitBtn">Submit</Button>
      </div>
    </div>
  );
};

export default ManageData;
