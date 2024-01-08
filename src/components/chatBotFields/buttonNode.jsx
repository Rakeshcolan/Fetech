import { Handle, Position } from "reactflow";
import DeleteIcon from "./deleteIcon/deleteIcon";
import { InputHoc } from "../chatHoc/inputHoc";
import "./chatBotFieldsStyle.css";
function ButtonNode(props) {
  const { dataone, isConnectable, handleChange, inputValue } = props;
  let buttonStyle = {
    backgroundColor: "#b1bab3",
    border: "none",
    width: "80px",
    height: "40px",
    borderRadius: "5px",
    textAlign: "center",
    boxShadow: " -4px 5px 5px 0px rgba(225, 230, 226)",
  };
  return (
    <>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        style={{ borderColor: "black !important" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        style={{ borderColor: "black !important" }}
      />
      <div style={{ position: "relative" }}>
        <input
          type="text"
          value={inputValue}
          className="activeborder"
          style={buttonStyle}
          onChange={(e) => handleChange(e)}
        />
        <DeleteIcon deleteId={dataone.nodeId} />
      </div>
    </>
  );
}

export default InputHoc(ButtonNode);
