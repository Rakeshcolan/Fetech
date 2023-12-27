import { Button } from "@mui/material";
import { useState } from "react";
import AddButton from "../../../components/common/Button/addButton";
import CommonTextFields from "../../../components/common/Field/CommonTextFIelds";
import CommonUpload from "../../../components/common/Field/CommonUpload";
import CustomizedTables from "../../../components/common/table";
import {
  manageDataTableData,
  manageDataTableHead,
} from "../../../components/common/tableData";

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
    <>
      <h2>ManageData</h2>
      <h4>Upload Data</h4>
      <CommonUpload />
      <h4>Manual Upload Data</h4>
      <div>
        <AddButton />
      </div>
      <div className="row">
        <div className="col-lg-4">
          <CommonTextFields label="Name" id="Name" />
        </div>
        <div className="col-lg-4">
          <CommonTextFields label="Email" id="Email" />
        </div>
        <div className="col-lg-4">
          <CommonTextFields label="PhoneNumber" id="PhoneNumber" />
        </div>
      </div>
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
    </>
  );
};

export default ManageData;
