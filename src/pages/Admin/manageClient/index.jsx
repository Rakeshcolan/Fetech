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
  
  const [modalOpen, setModalOpen] = useState();
  const dispatch = useDispatch();
  const { getClientDetail, clientDetail,getClientDetailisLoading } = useSelector(adminSelector);
  const paginationRowsOptions = [5, 10, 20, 50, 100];


  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleDelete = (id)=>{
  
    
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
          dataLoading = {getClientDetailisLoading}
          
        />
        <AddClientModal openModal={modalOpen} setOpenModal={handleModalClose} />
     
      </div>

    </>
  );
};

export default ManageClients;
