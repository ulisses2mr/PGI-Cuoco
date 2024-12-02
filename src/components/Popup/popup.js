import React, { useState } from "react";
import "./popup.css";

const Popup = ({ isPopupVisible, setPopupVisible, recipe }) => {
  const [activeTab, setActiveTab] = useState("recipe"); // Track the active tab (recipe, animation)

  if (!recipe) return null; // Don't render popup if no recipe is provided

  const hidePopup = () => {
    setPopupVisible(false);
    setActiveTab("recipe")
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Change the active tab
  };

  return (
    <div>
      <div className={`popup-overlay ${isPopupVisible ? "active" : ""}`} onClick={hidePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={hidePopup}>
            &times;
          </button>

          <div className="tabs">
            <button
              className={`tab-button ${activeTab === "recipe" ? "active" : ""}`}
              onClick={() => handleTabChange("recipe")}
            >
              Recipe
            </button>
            <button
              className={`tab-button ${activeTab === "animation" ? "active" : ""}`}
              onClick={() => handleTabChange("animation")}
            >
              Animation
            </button>
          </div>

          {isPopupVisible && recipe && activeTab === "recipe" && (
            <div className="recipe-content">
              {/* Ingredients and Instructions in a scrollable area */}
              <div className="scrollable-area">
                <div>
                  <h3>Ingredients:</h3>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3>Instructions:</h3>
                  <ol>
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* Animation Tab Content */}
          {isPopupVisible && activeTab === "animation" && (
            <div className="animation-content">
              {/* Placeholder for animation */}
              <div className="animation-placeholder">
                <h4>Your Animation Goes Here</h4>
                {/* Add your animation code or component here */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
