import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  MarkerType,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  addEdge,
  useNodesState,
} from "reactflow";
import { memo } from "react";
import Sidebar from "../chatBotFields/Sidebar";
import ButtonNode from "../chatBotFields/buttonNode";
import TextAreaUpdater from "../chatBotFields/textArea";
import TextUpdaterNode from "../chatBotFields/TextUpdaterNode";
import "reactflow/dist/style.css";
import { useSelector } from "react-redux";
import AlertUser from "../modal/paymentModal";
import { NodeContext } from "../../nodecontext/nodeContext";
import { useDispatch } from "react-redux";
import { addInstance } from "../../redux/flowAction";

const FlowPage = forwardRef((props, ref) => {
  const {
    // updateNode,\
    setNodes,
    nodes,
    reactFlowInstance,
    edges,
    onNodesChange,
    onEdgesChange,
    setReactFlowInstance,
    onDragOver,
    onStop,
    setEdges,
  } = props;

  const reactFlowWrapper = useRef(null);
  let contextdata = useContext(NodeContext);
  let { value, changeId, changeValue } = contextdata;
  const [nodeNum, setNodeNum] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [nodeTypes, setNodeTypes] = useState({
    textupdater: TextUpdaterNode,
    buttonNode: ButtonNode,
    textAreaUpdater: TextAreaUpdater,
  });

  let oldNodeId = nodes?.filter((node) => node.id.split("_")[0] == "dndnode");
  let oldGroudNodeId = nodes?.filter(
    (node) => node.id.split("_")[0] == "groupnode"
  );

  let dispatch = useDispatch();

  let id = oldNodeId.length+1;
  const getId = () => `dndnode_${id++}`;
  let groupId = oldGroudNodeId.length;
  const getGroupId = () => `groupnode_${groupId++}`;

  const { payPrice } = useSelector((state) => state);

  const onConnect = (params) =>
    setEdges((eds) => {
      params.markerEnd = {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "black",
      };
      params.className = "customnode";
      return addEdge(params, eds);
    });

  //updating node from context value
  useEffect(() => {
    updateNode(changeId, value);
  }, [value]);

  const updateNode = (id, value) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          node.data = {
            ...node.data,
            label: value,
          };
        }
        return node;
      })
    );
  };
  // reactFlowInstance.addNodes(nodes)
  // reactFlowInstance.addEdges(edges)

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      let parentGroupId = event.target.id;
      let parentWrapper = event.target.classList[0];
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      let type = event.dataTransfer.getData("application/reactflow");
      let droppingid = event.dataTransfer.getData("id");
      const parentPosition = reactFlowInstance
        .getNodes()
        .find((element) => element.id === parentGroupId)?.position;
      if (typeof type === "undefined" || !type) {
        return;
      }
      if (type === "headtext") return;
      let newNode;
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      if (parentGroupId.split("_").includes("groupnode")) {
        const adjustedPosition = {
          x: position.x - parentPosition.x - 40,
          y: position.y - parentPosition.y - 40,
        };
        let nodeId = getId();
        newNode = {
          id: nodeId,
          type: type,
          position: adjustedPosition,
          parentNode: parentGroupId,
          data: { nodeId: nodeId },
          // onChangeInput: updateTextUpdaterInput },
        };
      } else if (
        parentWrapper === "react-flow__pane" &&
        droppingid.split("_").includes("groupnode")
      ) {
        let nodeID = getGroupId();
        newNode = {
          id: nodeID,
          type: type,
          position,
          data: {
            groupId: nodeID,
            nodeId: nodeID,
            // onChangeInput: updateTextUpdaterInput,
          },
        };
      } else {
        let nodeId = getId();
        newNode = {
          id: nodeId,
          type: type,
          position,
          data: { nodeId: nodeId },
          // , onChangeInput: updateTextUpdaterInput },
        };
      }
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );
  useEffect(() => {
    setNodeNum(nodes.length);
    dispatch(addInstance({ instance: reactFlowInstance }));
  }, [nodes]);

  const Payment = () => {
    setOpenModal(true);
  };
  console.log("onload", nodes);
  return (
    <>
      <ReactFlowProvider>
        <div
          className="reactflow-wrapper"
          id="flowpaper"
          ref={reactFlowWrapper}
        >
          <AlertUser open={openModal} setOpenModal={setOpenModal} />

          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            className="react-flow-subflows-example"
            onDrop={nodeNum < payPrice ? onDrop : Payment}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            onNodeDragStop={onStop}
            fitView
          ></ReactFlow>
        </div>
        <Sidebar />
      </ReactFlowProvider>
    </>
  );
});
export default memo(FlowPage);
