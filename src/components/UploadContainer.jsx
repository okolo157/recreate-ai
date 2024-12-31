import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";

import "../styles/Home.css";

function UploadContainer() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/upload");
  };

  return (
    <div className="main-content">
      <p>Recreate AI Code Generator</p>
      <h1
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "65px",
          fontWeight: "800",
        }}
      >
        Generate clean, reusable UI code <br />
        <div className="h1-1">from screenshots/mockups</div>
      </h1>
      <div className="upload-container">
        <ButtonComponent Text="Upload for Free" disclaimer="10 credits left" handleNavigate={handleNavigate} />
      </div>
    </div>
  );
}

export default UploadContainer;
