import { useEffect, useState } from "react";
import "./manageChatbot.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteChatbotApi, getallChatBotApi } from "../../../redux/action/adminAction";
import { adminSelector } from "../../../redux/slice/adminSlice";
import CustomizedTables from "../../../components/common/commonTable";
import { chatBotTableTitle } from "../../../components/common/tableData";
import AddButton from "../../../components/common/Button/addButton";
import { useNavigate } from "react-router-dom";

const ManageChatBot = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { getAllChatbotData, chatBotData, editChatBotById ,getAllchatBotDataisLoading} =
    useSelector(adminSelector);
  const handleRoute = () => {
    navigate(`/dashboard/flowpage`, { state: { action: "Add" } });
  };
  useEffect(() => {
    dispatch(getallChatBotApi());
  }, [chatBotData, editChatBotById]);

  const handleDelete = (data)=>{
    
    dispatch(deleteChatbotApi(data.chatbot_id))
  }
  return (
    <>
      <div className="managebotContainer commonbox">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h4>Manage Chatbot</h4>
        <AddButton buttonText={"Add"} handleClick={handleRoute} />
        </div>
        <CustomizedTables
          columns={chatBotTableTitle}
          rows={getAllChatbotData}
          dataLoading = {getAllchatBotDataisLoading}
          paginationStatus={true}
          navigatepath={"flowpage"}
          onDelete = {handleDelete}
        />
      </div>
    </>
  );
};
export default ManageChatBot;
