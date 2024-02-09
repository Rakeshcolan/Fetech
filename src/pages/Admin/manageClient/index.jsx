import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CustomizedTables from "../../../components/common/commonTable";
import { ClientDataHead } from "../../../components/common/tableData";
import AddClientModal from "../../../components/modal/addClientModal";
import { deleteClientApi, getClientApi } from "../../../redux/action/adminAction";
import { adminSelector } from "../../../redux/slice/adminSlice";
import "../../../styles/App.css";

const ManageClients = () => {
  // const [size, setSize] = useState(0);
  // const [page, setPage] = useState(5);
  const [modalOpen, setModalOpen] = useState();
  const dispatch = useDispatch();
  const { getClientDetail, clientDetail } = useSelector(adminSelector);
  const paginationRowsOptions = [5, 10, 20, 50, 100];

  // const handlePerRowsChange = async (event) => {
  //   setPage(+event.target.value);
  //   setSize(0);
  // };

  // const handlePageChange = async (newPage) => {
  //   setPage(newPage);
  // };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleDelete = (id)=>{
    alert('deleting')
    // deleteClientApi(id)
  }


  useEffect(() => {
    dispatch(getClientApi());
  }, [clientDetail]); // Add getClientDetail as a dependency

  return (
    <>
      <div className="commonbox">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h4>Manage Clients</h4>
        <Button className="addBtn" onClick={handleModalOpen}>
          +Add
        </Button>
        </div>
       
        <CustomizedTables
          columns={ClientDataHead}
          rows={getClientDetail}
          paginationStatus={true}
          rowsPerPageOptions={paginationRowsOptions}
          onDelete = {handleDelete}
          
        />
        <AddClientModal openModal={modalOpen} setOpenModal={handleModalClose} />
     
      </div>

    </>
  );
};

export default ManageClients;
