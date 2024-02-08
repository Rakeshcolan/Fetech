import { useEffect, useState } from "react";
import "./manageChatbot.css";
import { useDispatch, useSelector } from "react-redux";
import { getallChatBotApi } from "../../../redux/action/adminAction";
import { adminSelector } from "../../../redux/slice/adminSlice";
import CustomizedTables from "../../../components/common/commonTable";
import { chatBotTableTitle } from "../../../components/common/tableData";
import AddButton from "../../../components/common/Button/addButton";
import { useNavigate } from "react-router-dom";

const ManageChatBot = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { getAllChatbotData, chatBotData, editChatBotById } =
    useSelector(adminSelector);
  const handleRoute = () => {
    navigate(`/dashboard/flowpage`, { state: { action: "Add" } });
  };
  useEffect(() => {
    dispatch(getallChatBotApi());
  }, [chatBotData, editChatBotById]);
  return (
    <>
      <div className="managebotContainer">
        <h4>Manage Chatbot</h4>
        <AddButton buttonText={"Add"} handleClick={handleRoute} />
        <CustomizedTables
          columns={chatBotTableTitle}
          rows={getAllChatbotData}
          paginationStatus={true}
          navigatepath={"flowpage"}
        />
      </div>
    </>
  );
};
export default ManageChatBot;
