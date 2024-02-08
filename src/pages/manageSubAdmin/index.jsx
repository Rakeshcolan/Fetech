import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CustomizedTables from "../../components/common/commonTable";
import { subAdminTableHead } from "../../components/common/tableData";
import AddSubAdminModal from "../../components/modal/addSubAdminModal";
import { getSubAdminsApi } from "../../redux/action/adminAction";
import { adminSelector } from "../../redux/slice/adminSlice";

const ManageSubAdmin = () => {
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);
  const [modalOpen, setModalOpen] = useState();
  const dispatch = useDispatch();

  const paginationRowsOptions = [5, 10, 20, 50, 100];

  const { getallSubAdminDetail, subAdminDetail } = useSelector(adminSelector);
  const handlePerRowsChange = async (event) => {
    setPage(+event.target.value);
    setSize(0);
  };

  const handlePageChange = async (event, newPage) => {
    setSize(newPage)
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    dispatch(getSubAdminsApi());
  }, [subAdminDetail]);

  return (
    <>
      <div className="commonbox">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h4>Manage Sub Admin</h4>
        <Button className="addBtn" onClick={handleModalOpen}>
          + Add
        </Button>
        </div>
        <CustomizedTables
          columns={subAdminTableHead}
          rows={getallSubAdminDetail}
          paginationStatus={true}
          rowsPerPageOptions={paginationRowsOptions}
          page={page}
          size={size}
          handleChangePage={handlePageChange}
          handleChangeRowsPerPage={handlePerRowsChange}
        />
        <AddSubAdminModal openModal={modalOpen} setOpenModal={setModalOpen} />
      </div>
    </>
  );
};

export default ManageSubAdmin;
