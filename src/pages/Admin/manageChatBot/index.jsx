import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./manageChatbot.css";
import DataTable from "../../../components/chatBot/dataTable";
import { useDispatch, useSelector } from "react-redux";
import { getallChatBotApi } from "../../../redux/action/adminAction";
import { adminSelector } from "../../../redux/slice/adminSlice";

const ManageChatBot = () => {
  // let {flowData} = useSelector((state)=>state.flow)
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const { getAllChatbotData,chatBotData,editChatBotById } = useSelector(adminSelector);
  const [flowData, setFlowData] = useState([]);
  console.log("getAllChatbotData",getAllChatbotData);

  useEffect(() => {
    // alert('testting')
    dispatch(getallChatBotApi());
  }, [chatBotData,editChatBotById]);
  return (
    <>
      <div className="managebotContainer">
        <h4>Manage Chatbot</h4>
        <DataTable flowData={getAllChatbotData} />
      </div>
    </>
  );
};
export default ManageChatBot;
