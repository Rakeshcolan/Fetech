import { Handle, Position } from "reactflow";
import DeleteIcon from "./deleteIcon/deleteIcon";
import {InputHoc} from "../chatHoc/inputHoc";
import "./chatBotFieldsStyle.css"
function ButtonNode({  data, isConnectable,handleChange,inputValue,handleDelete }) {
  let buttonStyle = {
    backgroundColor: "#b1bab3",
    border: "none",
    width: "80px",
    height: "40px",
    borderRadius: "5px",
    textAlign: "center",
    boxShadow: " -4px 5px 5px 0px rgba(225, 230, 226)",
  };
  console.log("data",data);
  return (
    <>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={{borderColor:"black !important"}}
      />
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        style={{borderColor:"black !important"}}
        
      />
      <div style={{position:"relative"}}>
      <input
        type="text"
        value={inputValue}
        className="activeborder"
        style={buttonStyle}
        onChange={(e) => handleChange(e)}
      />
      <DeleteIcon onDeleteInstance = {data.nodeInstance} deleteId={data.nodeId}/>
      </div>
    </>
  );
}

export default InputHoc(ButtonNode);
