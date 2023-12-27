import { useState } from "react";
import AddButton from "../../components/common/Button/addButton";
import CustomizedTables from "../../components/common/table";
import { subAdminTableData, subAdminTableHead } from "../../components/common/tableData";


const ManageSubAdmin = () => {
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
      <h2>Manage SubAdmin</h2>

      <AddButton />

      <CustomizedTables
        columns={subAdminTableHead}
        rows={subAdminTableData}
        paginationStatus={true}
        rowsPerPageOptions={paginationRowsOptions}
        page={page}
        size={size}
        handleChangePage={handlePageChange}
        handleChangeRowsPerPage={handlePerRowsChange}
      />
    </>
  );
};

export default ManageSubAdmin;
