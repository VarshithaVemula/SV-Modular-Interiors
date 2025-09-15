import React from 'react';

function VideoModal({ videoSrc, onClose }) {
  // Prevent closing when clicking inside the modal content
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <video width="100%" controls autoPlay>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoModal;