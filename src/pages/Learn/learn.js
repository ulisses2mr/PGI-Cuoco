import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Button from "../../components/Button/button";
import ovo from "../../assets/imagePGI.png";
import Popup from "../../components/Popup/popup";
import logo from "../../assets/logo3.png"; // Using a different image for the tree nodes
import React from "react";
import "./learn.css";
import { useState } from "react";

// Recursive Tree Component (Horizontal Layout with Larger Nodes)
const TreeNode = ({ node, x = 0, y = 0, parentX = null, parentY = null, img_node = logo, showPopup }) => {
  const childXOffset = 300; // Increased space between levels
  const childYOffset = 200; // Increased space between siblings

  return (
    <div>
      {/* Render Connection Lines */}
      {parentX !== null && parentY !== null && (
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "visible",
            zIndex: 1, // Ensure it's beneath the nodes but still visible
          }}
        >
          <line
            x1={parentX + 50} // Start point for the line (center of parent)
            y1={parentY + 50}
            x2={x + 50} // End point for the line (center of child)
            y2={y + 50}
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      )}

      {/* Render the current node (egg image with a frame) */}
      <div
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: "120px", // Increased node width
          height: "120px", // Increased node height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          onClick={showPopup}  // Trigger the showPopup function
          src={img_node}
          alt="Egg"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "15px",
            border: "6px solid black",
            zIndex: 2,
            cursor: "pointer",
          }}
        />
      </div>

      {/* Render child nodes recursively */}
      {node.children &&
        node.children.map((child, index) => (
          <TreeNode
            key={index}
            node={child}
            x={x + childXOffset} // Adjusting horizontal distance for children
            y={
              y +
              index * childYOffset -
              (node.children.length - 1) * (childYOffset / 2) // Adjusting vertical spread
            }
            parentX={x}
            parentY={y}
            showPopup={showPopup} // Pass showPopup down to the child
          />
        ))}
    </div>
  );
};

export default function Learn() {
  const [isPopupVisible, setPopupVisible] = useState(false);  // UseState to control popup visibility

  const showPopup = () => {
    setPopupVisible(true);  // Set popup visibility to true
  };

  const hidePopup = () => {
    setPopupVisible(false);  // Set popup visibility to false
  };

  // Tree data for the egg tree
  const treeData = {
    children: [
      {
        children: [
          { children: [
            { children: [] },
            { children: [] },
          ] },
          { children: [] },
          { children: [] },
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="homepage">
        {/* Render the Popup, passing visibility state and setter */}
        <Popup isPopupVisible={isPopupVisible} setPopupVisible={setPopupVisible} hidePopup={hidePopup} />

        <div
          style={{
            position: "relative",
            height: "800px",
            width: "1200px",
            margin: "50px auto",
          }}
        >
          {/* Render the tree and pass the showPopup function to TreeNode */}
          <TreeNode node={treeData} x={0} y={350} showPopup={showPopup} />
        </div>
      </div>
    </>
  );
}