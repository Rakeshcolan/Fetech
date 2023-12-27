import { useState } from "react";
import AddButton from "../../components/common/Button/addButton";
import CustomizedTables from "../../components/common/table";
import { RolesAndPermissionsData, RolesAndPermissionsHead } from "../../components/common/tableData";

const ManageRoles = () => {
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
      <h1>Roles & permissions</h1>
      <div>
        <AddButton />
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
      </div>
    </>
  );
};

export default ManageRoles;
