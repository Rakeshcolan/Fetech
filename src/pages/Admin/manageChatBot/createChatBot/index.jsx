import React, { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";
import FlowPage from "../../../../components/chatBot/reactflow";
import "../manageChatbot.css";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import {
  addChatBotApi,
  editChatByIdApi,
  getChatBotByIdApi,
} from "../../../../redux/action/adminAction";
import { adminSelector } from "../../../../redux/slice/adminSlice";
import useBuildJson from "../../../../hooks/useBuildJson";
const label = { inputProps: { "aria-label": "Switch demo" } };

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Start" },
    position: { x: 250, y: 5 },
  },
];
const CreateChat = () => {
  const reactFlowWrapper = useRef(null);
  //added custom hook with teh buildjson function to create the json
  const { buildJSON } = useBuildJson();
  const location = useLocation();
  const navigate = useNavigate();
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  let { action = "", arrayIndex = "" } = location?.state || {};
  let dispatch = useDispatch();
  const { getChatBotDataByIdisLoading, getChatBotDataById } =
    useSelector(adminSelector);
  const [chatbotData, setChatbotData] = useState({
    clientName: "",
    chatbotName: "",
    question: "",
    status: false,
  });

  const onStop = (event, node) => {};
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  useEffect(() => {
    if (getChatBotDataById?.flow_data && action == "Edit") {
      let nodeObject = getChatBotDataById?.flow_data;
      let savedNodeObject = nodeObject?.nodes;
      // let savedNodeObject = [...nodeObject[arrayIndex]?.flowElements.nodes];
      // let savedEdges = [...nodeObject[arrayIndex]?.flowElements.edges];
      setChatbotData({
        clientName: getChatBotDataById?.Chatbot_name,
        chatbotName: getChatBotDataById?.Chatbot_name,
        question: getChatBotDataById?.question,
        status:getChatBotDataById?.status
      });
      
      setNodes(nodeObject?.nodes);
      setEdges(nodeObject?.edges);
    } else {
      setNodes(initialNodes);
    }
  }, [getChatBotDataById, action, setNodes, setEdges]);

  useEffect(() => {
    if (arrayIndex > 0) {
      dispatch(getChatBotByIdApi(arrayIndex));
    }
  }, [arrayIndex, dispatch, setNodes, setEdges]);

  const saveElements = () => {
    const startingNodeId = "1";
    const resultJSON = buildJSON(
      reactFlowInstance.toObject().nodes,
      reactFlowInstance.toObject().edges,
      startingNodeId
    );
    let savedElements = {
      flow_data: reactFlowInstance.toObject(),
      Chatbot_name: chatbotData.chatbotName,
      question: chatbotData.question,
      status: chatbotData?.status,
      json_content: resultJSON,
    };
    if (action == "Edit") {
      dispatch(editChatByIdApi(arrayIndex, savedElements));
    } else {
      dispatch(addChatBotApi(savedElements));
    }
    navigate("/dashboard/chatbot");
  };

  const updateName = (e) => {
    e.preventDefault();
    let { name, value } = e?.target;
    setChatbotData({ ...chatbotData, [name]: value });
  };

  const handleStatus = (e) => {
   
    setChatbotData({...chatbotData,status:!chatbotData.status})
  };

  return (
    <>
      <div className="dndflowheader">
        <h2>Manage ChatBot</h2>
        <div className="dndflowfields">
          {/* <div className="dndflowinput">
            <label>Client Name</label>
            <input
              value={chatbotData.clientName}
              name="clientName"
              onChange={(e) => updateName(e)}
            />
          </div> */}
          <div className="dndflowinput">
            <label>Chatbot Name</label>
            <input
              value={chatbotData.chatbotName}
              name="chatbotName"
              onChange={(e) => updateName(e)}
            />
          </div>
          <div className="dndflowinput">
            <label>Question</label>
            <input
              value={chatbotData.question}
              name="question"
              onChange={(e) => updateName(e)}
            />
          </div>

          <div className="dndactive">
            <label>Status:</label>
            <span>Active</span>
            <Switch
              {...label}
              name="status"
              checked={chatbotData.status}
              value={chatbotData.status}
              onChange={(e) => handleStatus(e)}
            />
            <span>InActive</span>
          </div>
        </div>
      </div>

      <div className="dndflow">
        <FlowPage
          nodes={nodes}
          ref={reactFlowWrapper}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          // onConnect={onConnect}
          // onDrop={onDrop}
          setEdges={setEdges}
          setReactFlowInstance={setReactFlowInstance}
          reactFlowInstance={reactFlowInstance}
          onDragOver={onDragOver}
          setNodes={setNodes}
          onStop={onStop}
        />

        <button
          onClick={() => saveElements()}
          style={{
            backgroundColor: "#87cc87",
            margin: "10px",
            color: "white",
            fontWeight: "bolder",
            height: "30px",
            borderRadius: "5px",
            fontSize: "20px",
            position: "fixed",
            bottom: "0",
            right: "0",
            border: "none",
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default CreateChat;
