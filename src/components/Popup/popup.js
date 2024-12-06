import React, { useState } from "react";
import "./popup.css";
import DragAndDrop from "./dragdrop";
import logo from "../../assets/logo3.png";

const Popup = ({ isPopupVisible, setPopupVisible, recipe, open = true }) => {
  const [activeTab, setActiveTab] = useState("recipe"); // Track the active tab (recipe, animation)

  if (!recipe) return null; // Don't render popup if no recipe is provided

  const hidePopup = () => {
    setPopupVisible(false);
    setActiveTab("recipe");
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Change the active tab
  };

  return (
    <div>
      <div
        className={`popup-overlay ${isPopupVisible ? "active" : ""}`}
        onClick={hidePopup}
      >
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={hidePopup}>
            &times;
          </button>

          {/* Render tabs only if open is true */}
          {open && (
            <div className="tabs">
              <button
                className={`tab-button ${activeTab === "recipe" ? "active" : ""}`}
                onClick={() => handleTabChange("recipe")}
              >
                Receita
              </button>
              <button
                className={`tab-button ${activeTab === "animation" ? "active" : ""}`}
                onClick={() => handleTabChange("animation")}
              >
                Treinar
              </button>
            </div>
          )}

          {/* Recipe Tab Content */}
          {isPopupVisible && recipe && activeTab === "recipe" && (
            <div
              className="recipe-content"
              style={{ marginLeft: "1rem", marginTop: "1rem" }}
            >
              <h3 style={{ color: "#FF5E5E", fontSize: "25px" }}>
                {recipe.title}
              </h3>
              {/* Ingredients and Instructions in a scrollable area */}
              <div className="scrollable-area">
                <div>
                  <h3>Ingredientes:</h3>
                  <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} style={{ marginBottom: "8px" }}>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3>Instruções:</h3>
                  <ol style={{ listStyle: "decimal", paddingLeft: "20px" }}>
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} style={{ marginBottom: "8px" }}>
                        {instruction}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* Animation Tab Content */}
          {isPopupVisible && activeTab === "animation" && open && (
            <div className="animation-content">
              <DragAndDrop></DragAndDrop>
              {/*<h1 style={{marginTop:'4rem'}}>Estamos a desenvolver uma animação interativa para que facilitar a tua aprendizagem</h1>
              <img src={logo} alt={''} style={{ marginTop:'5rem', width: "10rem"}}></img>*/}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
