import React from "react";

function ImageModal({ imgSrc, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imgSrc} alt="enlarged" />
        <button onClick={onClose} className="btn close-btn">×</button>
      </div>
    </div>
  );
}

export default ImageModal;
