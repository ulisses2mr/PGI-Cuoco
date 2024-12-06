import React, { useState, useRef } from "react";
import drags from "../../assets/novo.png"; // Draggable image
import centerImage from "../../assets/stoves.png"; // Initial center image
import newCenterImage from "../../assets/estre.png"; // New center image
import newDraggableImage from "../../assets/novo.png"; // New draggable image


const DragAndDrop = () => {
  const [position, setPosition] = useState({ x: 90, y: 50 }); // Position in percentages
  const [isDragging, setIsDragging] = useState(false);
  const [centerImageSrc, setCenterImageSrc] = useState(centerImage); // State for the center image
  const [draggableImageSrc, setDraggableImageSrc] = useState(drags); // State for the draggable image
  const containerRef = useRef(null);
  const centerImageRef = useRef(null); // Reference to the center image

  // Handle mouse down: Start dragging and immediately grab the image
  const onMouseDown = (e) => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    // Calculate position immediately
    const newLeft = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    const newTop = ((e.clientY - containerRect.top) / containerRect.height) * 100;

    setPosition({ x: newLeft, y: newTop });
    setIsDragging(true);
  };

  // Handle mouse move: Update position dynamically
  const onMouseMove = (e) => {
    if (!isDragging) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    // Calculate the new position relative to the container
    const newLeft = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    const newTop = ((e.clientY - containerRect.top) / containerRect.height) * 100;

    // Restrict movement to container bounds
    if (newLeft >= 0 && newLeft <= 100 && newTop >= 0 && newTop <= 100) {
      setPosition({ x: newLeft, y: newTop });
    }
  };

  // Handle mouse up: Stop dragging and check for drop on the center image
  const onMouseUp = () => {
    setIsDragging(false);

    // Get the bounding box of the center image and draggable image
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const centerImg = centerImageRef.current;
    const centerRect = centerImg.getBoundingClientRect();

    // Convert the draggable position from percentages to pixels
    const draggableLeft = (position.x / 100) * containerRect.width;
    const draggableTop = (position.y / 100) * containerRect.height;

    // Check if the draggable image is dropped on top of the center image
    if (
      draggableLeft <= centerRect.left - centerRect.width &&
      draggableLeft >= centerRect.left - 2*centerRect.width &&
      draggableTop <= centerRect.top &&
      draggableTop >= centerRect.top - centerRect.height
    ) {
      // Change both images
      setCenterImageSrc(newCenterImage); // Update center image
      setDraggableImageSrc(''); // Update draggable image
    }
    else{
      console.log(centerRect)
      console.log(draggableTop)
    }
  };

  return (
    <div
      ref={containerRef}
      className="animation-placeholder"
      style={{
        width: "auto",
        height: "20rem",
        position: "relative",
        border: "2px dashed #ccc",
        backgroundColor: "#f9f9f9",
        overflow: "hidden",
      }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp} // Stop dragging if mouse leaves container
    >
      {/* Non-draggable image centered */}

      <img
        ref={centerImageRef}
        src={centerImageSrc}
        alt="Center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the image
          width: "200px", // Adjust size as needed
        }}
      />

      {/* Draggable image */}
      <img
        src={draggableImageSrc}
        alt=""
        onMouseDown={onMouseDown}
        style={{
          position: "absolute",
          top: `${position.y}%`,
          left: `${position.x}%`,
          cursor: isDragging ? "grabbing" : "pointer",
          transform: "translate(-50%, -50%)", // Center the image at its coordinates
          width: "40px",
        }}
      />

    </div>
  );
};

export default DragAndDrop;
