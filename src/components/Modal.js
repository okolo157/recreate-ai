import React from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Modal.css";
function Modal({ handleCloseModal, onFileChange }) {
  return (
    <div>
      <div className="modal">
        <div className="modal-content general">
          <div className="modal-header">
            <div className="modal-text">
              <h3 className="h3">Upload a file</h3>
              <p style={{ all: "unset", color: "black", marginBottom: "30px" }}>
                Please select files in the following formats: PNG, JPG, WEBP,
                AVIF, PDF
              </p>
            </div>
            <FontAwesomeIcon
              className="close-icon"
              icon={faClose}
              onClick={handleCloseModal}
            />
          </div>
          <div className="input-container">
            <input onChange={onFileChange} type="file" className="input" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
