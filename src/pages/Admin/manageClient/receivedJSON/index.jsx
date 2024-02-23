import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { deleteClientApi, deleteRegisterApi, getClientApi } from "../../../redux/action/adminAction";
import { adminSelector } from "../../../redux/slice/adminSlice";
import "../../../styles/App.css";

const ManageClients = () => {
  
  const [modalOpen, setModalOpen] = useState();
  const dispatch = useDispatch();
  const { getClientDetail, clientDetail,getClientDetailisLoading ,deleteData} = useSelector(adminSelector);
  const paginationRowsOptions = [5, 10, 20, 50, 100];


  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    dispatch(getClientApi());
  }, [clientDetail,deleteData]); // Add getClientDetail as a dependency

  return (
    <>
      <div className="commonbox">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h4>Manage Clients</h4>
        <Button className="addBtn" onClick={handleModalOpen}>
          Download
        </Button>
        </div>
       
        <CustomizedTables
          columns={ClientDataHead}
          rows={getClientDetail}
          paginationStatus={true}
          rowsPerPageOptions={paginationRowsOptions}
        
          dataLoading = {getClientDetailisLoading}
          
        />
       
       <Button className="addBtn" onClick={handleModalOpen}>
          Approve
        </Button>
      </div>

    </>
  );
};

export default ManageClients;
