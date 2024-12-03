import React, { useState } from 'react';

const DragAndDrop = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Handle drag start: store initial position
  const onDragStart = (e) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
  };

  // Handle drag: calculate the movement and update position
  const onDrag = (e) => {
    if (e.clientX === 0 && e.clientY === 0) return; // Prevent initial empty drag
    const deltaX = e.clientX - position.x;
    const deltaY = e.clientY - position.y;
    setPosition({ x: e.clientX, y: e.clientY });
    e.target.style.left = `${e.target.offsetLeft + deltaX}px`;
    e.target.style.top = `${e.target.offsetTop + deltaY}px`;
  };

  // Prevent image dragging outside the bounds of the container
  const onDragEnd = (e) => {
    // Add any logic you want to handle when dragging ends
  };

  return (
    <div
      className="animation-placeholder"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        border: '2px dashed #ccc',
        backgroundColor: '#f9f9f9',
      }}
    >
      {/* Image that can be dragged */}
      <img
        src="path_to_your_image.png"  // Replace with your image path
        alt="Draggable"
        draggable
        onDragStart={onDragStart}
        onDrag={onDrag}
        onDragEnd={onDragEnd}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          cursor: 'move',
          transform: 'translate(-50%, -50%)',  // Center image by default
          width: '80px',  // Adjust image size as necessary
        }}
      />
    </div>
  );
};

export default DragAndDrop;
