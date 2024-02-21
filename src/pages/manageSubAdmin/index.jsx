import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CustomizedTables from "../../components/common/commonTable";
import { subAdminTableHead } from "../../components/common/tableData";
import AddSubAdminModal from "../../components/modal/addSubAdminModal";
import { deleteRegisterApi, getSubAdminsApi } from "../../redux/action/adminAction";
import { adminSelector } from "../../redux/slice/adminSlice";
import { authSelector } from "../../redux/slice/authSlice";

const ManageSubAdmin = () => {
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);
  const [modalOpen, setModalOpen] = useState();
  const dispatch = useDispatch();
  let userid = sessionStorage.getItem("UId")

  const paginationRowsOptions = [5, 10, 20, 50, 100];

  const { getallSubAdminDetail, subAdminDetail,adminDataLoading,deleteData=""} = useSelector(adminSelector);
 
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
    dispatch(getSubAdminsApi(userid));
  }, [subAdminDetail,deleteData,dispatch]);

  const handleDelete=(user)=>{
    dispatch(deleteRegisterApi(user.id))
  }
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
          onDelete = {handleDelete}
          dataLoading = {adminDataLoading}
          navigatepath ='editsubadmin'
        />
        
        <AddSubAdminModal openModal={modalOpen} setOpenModal={setModalOpen} userId = {userid} />
      </div>
    </>
  );
};

export default ManageSubAdmin;
