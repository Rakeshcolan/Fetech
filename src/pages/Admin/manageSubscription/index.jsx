import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CustomizedTables from "../../../components/common/commonTable";
import { SubscriptionDataHead } from "../../../components/common/tableData";
import AddSubscriptionModal from "../../../components/modal/addSubscriptionModal";
import { deleteRegisterApi, deleteSubscriptionApi, getSubscriptionApi } from "../../../redux/action/adminAction";
import { adminSelector } from "../../../redux/slice/adminSlice";
import "../../../styles/App.css";

const ManageSubscription = () => {
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);
  const [modalOpen, setModalOpen] = useState();
  const dispatch = useDispatch();
  const { getSubscriptionDetail, subscriptionDetail,getSubscriptionDetailisLoading } =
    useSelector(adminSelector);

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
  const handleDelete = (data)=>{
    let id = data?.subscription_id;
    dispatch(deleteSubscriptionApi(id))
  }

  useEffect(() => {
    dispatch(getSubscriptionApi());
  }, [subscriptionDetail,dispatch]);

  return (
    <>
      <div className="commonbox">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h4>Manage Subscription</h4>
        <Button className="addBtn" onClick={handleModalOpen}>
          + Add
        </Button>
        </div>
        <CustomizedTables
          columns={SubscriptionDataHead}
          rows={getSubscriptionDetail}
          paginationStatus={true}
          rowsPerPageOptions={paginationRowsOptions}
          page={page}
          size={size}
          onDelete = {handleDelete}
          handleChangePage={handlePageChange}
          dataLoading = {getSubscriptionDetailisLoading}
          handleChangeRowsPerPage={handlePerRowsChange}
        />
        <AddSubscriptionModal
          openModal={modalOpen}
          setOpenModal={setModalOpen}
        />
      </div>
    </>
  );
};

export default ManageSubscription;
