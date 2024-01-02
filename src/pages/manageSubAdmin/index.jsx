import { useState } from "react";
import { Button } from "react-bootstrap";
import CustomizedTables from "../../components/common/commonTable";
import {
  subAdminTableData,
  subAdminTableHead,
} from "../../components/common/tableData";
import AddSubAdminModal from "../../components/modal/addSubAdminModal";

const ManageSubAdmin = () => {
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);
  const [modalOpen, setModalOpen] = useState();

  const paginationRowsOptions = [5, 10, 20, 50, 100];

  const handlePerRowsChange = async (event) => {
    setPage(+event.target.value);
    setSize(0);
  };

  const handlePageChange = async (event, newPage) => {
    setPage(newPage);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <h2>Manage SubAdmin</h2>
      {/* <AddButton /> */}
      <Button className="addBtn" onClick={handleModalOpen}>
        +Add
      </Button>
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
      <AddSubAdminModal openModal={modalOpen} setOpenModal={setModalOpen} />
    </>
  );
};

export default ManageSubAdmin;
