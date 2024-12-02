import { Form, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Button from "../../components/Button/button";
import ovo from "../../assets/imagePGI.png";
import recipes from "./recipes_list";
import Popup from "../../components/Popup/popup";
import logo from "../../assets/logo3.png"; // Using a different image for the tree nodes
import React from "react";
import "./learn.css";
import { useState } from "react";

const Node = ({ x, y, img_node = logo, onClick }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: "120px",
        height: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 5,
      }}
    >
      <img
        onClick={onClick}
        src={img_node}
        alt="Node"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "15px",
          border: "6px solid black",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

const ConnectionLine = ({ x1, y1, x2, y2 }) => {
  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "visible",
        zIndex: 0,
      }}
    >
      <line
        x1={x1 + 50} // Adjust for node center
        y1={y1 + 50}
        x2={x2 + 50}
        y2={y2 + 50}
        stroke="black"
        strokeWidth="4"
      />
    </svg>
  );
};


export default function Learn() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [rec, setRec] = useState(1);

  const showPopup = (id) => {
    const recipe = recipes.find((r) => r.id === id);
    setRec(recipe);
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);  // Set popup visibility to false
  };

  return (
    <>
      <Navbar />
      <div className="homepage">
        {/* Render the Popup, passing visibility state and setter */}
        <Popup isPopupVisible={isPopupVisible} setPopupVisible={setPopupVisible} hidePopup={hidePopup} recipe={rec} />

        <h1 style={{display:"flex", justifyContent:"center", color:"#f84234"}}>Progride e aprende novas Receitas!</h1>

        <div style={{ position: "relative", margin: "auto", marginTop:"0%", marginLeft:"15%", display:"flex", justifyContent:"center", alignSelf:"center"  }}>
          <Node x={100} y={250} img_node={ovo} onClick={() => showPopup(1)} />
          <Node x={400} y={250} img_node={logo} onClick={() => showPopup(2)} />
          <Node x={800} y={50} img_node={logo} onClick={() => showPopup(3)} />
          <Node x={800} y={250} img_node={logo} onClick={() => showPopup(4)} />
          <Node x={800} y={450} img_node={logo} onClick={() => showPopup(5)} />

          <ConnectionLine x1={100} y1={250} x2={500} y2={250} />
          <ConnectionLine x1={400} y1={250} x2={800} y2={250} />
          <ConnectionLine x1={400} y1={250} x2={800} y2={450} />
          <ConnectionLine x1={400} y1={250} x2={800} y2={50} />
        </div>
      </div>
    </>
  );
}