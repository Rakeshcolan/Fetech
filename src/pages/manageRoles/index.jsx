import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomizedTables from "../../components/common/commonTable";
import {
  RolesAndPermissionsData,
  RolesAndPermissionsHead,
} from "../../components/common/tableData";

const ManageRoles = () => {
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);
  const navigate = useNavigate();

  const paginationRowsOptions = [5, 10, 20, 50, 100];

  const handlePerRowsChange = async (event) => {
    setPage(+event.target.value);
    setSize(0);
  };

  const handlePageChange = async (event, newPage) => {
    setPage(newPage);
  };

  // const handleRedirect = () => {
  //   navigate("/dashboard/roles/addRole");
  // };

  return (
    <>
      <div className="commonbox">
        <h4>Roles & permissions</h4>
        <div>
          {/* <AddButton /> */}
          <Button className="addBtn" >
            +Add
          </Button>
        </div>
        <div>
          <CustomizedTables
            columns={RolesAndPermissionsHead}
            rows={RolesAndPermissionsData}
            paginationStatus={true}
            rowsPerPageOptions={paginationRowsOptions}
            page={page}
            size={size}
            handleChangePage={handlePageChange}
            handleChangeRowsPerPage={handlePerRowsChange}
          />
          {/* <div className="contentCenter">
            <Button className="submitBtn">Submit</Button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ManageRoles;
