import { Handle, Position } from "reactflow";
import "./Nodes.css";
import { useState } from "react";

function handleClick(e) {
  e.preventDefault();
  alert("You clicked on me!!! Click on next node");
}

export function FirstNode({ data }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="react-flow__node-default startingNode">
      <button className="button" onClick={() => setIsClicked((c) => !c)}>
        {isClicked ? "Close message" : "Open message"}
      </button>
      <div>{isClicked && <div className="data">{data.label}</div>}</div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export function secondNode({ data }) {
  return (
    <div className="react-flow__node-default secondNode">
      <button className="div" onClick={handleClick}>
        {data.label}
      </button>
      <button className="div" onClick={handleClick}>
        You can resize us!!!{" "}
      </button>
      <button className="div" onClick={handleClick}>
        You can style us!!!{" "}
      </button>
      <button className="div" onClick={handleClick}>
        {" "}
        See next one 👉
      </button>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export function secondLastNode({ data }) {
  return (
    <div className="react-flow__node-default secondNode">
      <button className="div" onClick={handleClick}>
        {data.label}
      </button>
      <button className="div" onClick={handleClick}>
        You can make any type of UI!!!{" "}
      </button>
      <button className="div" onClick={handleClick}>
        {" "}
        You will literally love us 💓!!!
      </button>
      <button className="div" onClick={handleClick}>
        {" "}
        "See next one 👉"{" "}
      </button>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

export function LastNode({ data }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="react-flow__node-default startingNode">
      <div>{isClicked && <div className="data">{data.label}</div>}</div>
      <button className="button" onClick={() => setIsClicked((c) => !c)}>
        {isClicked ? "Close message" : "Open message"}
      </button>

      <Handle type="target" position={Position.Left} />
    </div>
  );
}
