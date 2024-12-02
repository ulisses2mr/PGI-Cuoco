import "./popup.css";

const Popup = ({ isPopupVisible, setPopupVisible }) => {
  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <div className={`popup-overlay ${isPopupVisible ? "active" : ""}`} onClick={hidePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="popup-close" onClick={hidePopup}>
            &times;
          </button>
          <h2>Welcome to the Popup!</h2>
        </div>
      </div>
    </div>
  );
};

export default Popup;
