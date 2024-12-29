import React from "react";
import "../styles/Home.css";
import Modal from "../components/Modal";

function Home() {
  const [showUploadModal, setShowUploadModal] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleProceed = () => {
    setShowUploadModal(true);
  };

  const onFileChange = async (event) => {
    try {
      setSelectedFile(event.target.files[0]);
    } catch (error) {
      console.log(error);
    }
    console.log(selectedFile);
    setShowUploadModal(false);
  };

  const FileData = () => {
    if (selectedFile) {
      return (
        <div>
          Selected file: {selectedFile.name} and type is {selectedFile.type}
        </div>
      );
    }
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
          fileData={FileData}
        />
      )}
      <FileData />
    </div>
  );
}

export default Home;
