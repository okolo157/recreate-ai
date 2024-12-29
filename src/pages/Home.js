import React from "react";
import "../styles/Home.css";
import Modal from "../components/Modal";

function Home() {
  const [showUploadModal, setShowUploadModal] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleProceed = () => {
    setShowUploadModal(true);
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setShowUploadModal(false);

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      localStorage.setItem("image", base64String);
    };
    reader.readAsDataURL(file);
  };


  const FileData = () => {
    if (selectedFile) {
      return (
        <div>
          Selected file: {selectedFile.name} and type is {selectedFile.type}
        </div>
      );
    }
    return null;
  };

  const handleCloseModal = () => {
    setShowUploadModal(false);
  };

  const handlePrompt = () => {
    const url = prompt("Please enter the image URL");
    if (url === null || url === "") {
      alert("Please enter the url");
    } else {
      localStorage.setItem("url", url);
    }
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
        <button onClick={handleProceed}> Upload Image </button>
        <p>
          or drop a file, <br />
          input image{" "}
          <span
            style={{
              color: "grey",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={handlePrompt}
          >
            url
          </span>
        </p>
      </div>
      {showUploadModal && (
        <Modal
          handleCloseModal={handleCloseModal}
          onFileChange={onFileChange}
        />
      )}
      <FileData />
      {selectedFile && (
        <div>
          {/* <img src={URL.createObjectURL(selectedFile)} alt="selected-img" /> */}
        </div>
      )}
    </div>
  );
}

export default Home;
