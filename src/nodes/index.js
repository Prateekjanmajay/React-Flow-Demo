import { secondNode, FirstNode, LastNode, secondLastNode } from "./Nodes";

export const initialNodes = [
  {
    id: "a",
    type: "input",
    position: { x: 0, y: 0 },
    data: {
      label:
        "👋👋 Welcome to My React-Flow page!!! Here we have 4 nested nodes. Please go to next nodes...",
    },
  },
  {
    id: "b",
    type: "second",
    position: { x: 300, y: 0 },
    data: { label: "You can drag us!!!" },
  },
  {
    id: "c",
    type: "second-last",
    position: { x: 600, y: 0 },
    data: { label: "You can click on us!!!" },
  },
  {
    id: "d",
    type: "output",
    position: { x: 900, y: 0 },
    data: {
      label:
        "Thankyou for visiting!!! It was very nice meeting you , See you soon 😊...",
    },
  },
];

export const nodeTypes = {
  second: secondNode,
  // Add any of your custom nodes here!
  input: FirstNode,
  output: LastNode,
  "second-last": secondLastNode,
};
