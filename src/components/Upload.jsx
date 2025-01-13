import React, { useState, useRef } from "react";
import styled from "styled-components";

function Upload({
  selectedProject,
  projects,
  setProjects,
  selectedFile,
  setSelectedFile,
  uploadedImage,
  setUploadedImage,
  isImageUploaded,
  setIsImageUploaded,
}) {
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setSelectedFile(file);
      setIsImageUploaded(true);
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === selectedProject
            ? { ...project, history: [...project.history, imageUrl] }
            : project
        )
      );
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    console.log("Selected language:", event.target.value);
  };

  return (
    <UploadPageContainer>
      <DropdownContainer>
        <label htmlFor="language-select">Select Language:</label>
        <LanguageDropdown
          id="language-select"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="HTML">HTML</option>
        </LanguageDropdown>
      </DropdownContainer>

      <HandleImageContainer>
        <LeftElements onClick={triggerFileInput}>
          {!isImageUploaded ? <p>Click anywhere to upload image</p> : ""}
          <FileInput
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
          />
          {uploadedImage && (
            <ImageContainer>
              <img src={uploadedImage} alt="Uploaded" />
            </ImageContainer>
          )}
        </LeftElements>

        <RightElements>
          <h2>Generated Code</h2>
          <CodeContainer>
            <pre>
              {selectedFile
                ? `// Code generated for ${selectedFile.name}`
                : "// No code generated yet."}
            </pre>
          </CodeContainer>
        </RightElements>
      </HandleImageContainer>
      <HistorySection>
        <h3>Conversion History</h3>
        <HistoryList>
          {projects
            .find((project) => project.id === selectedProject)
            ?.history.map((image, index) => (
              <HistoryItem key={index}>
                <img src={image} alt={`History ${index}`} />
              </HistoryItem>
            ))}
        </HistoryList>
      </HistorySection>
    </UploadPageContainer>
  );
}

const UploadPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  color: white;
  padding: 20px;
`;

const DropdownContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LanguageDropdown = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: none;
  color: white
`;

const HandleImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
  height: 40vh;
  gap: 20px;
`;

const LeftElements = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px dashed #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-right: 10px;
  cursor: pointer;
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }
`;

const RightElements = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const ImageContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  display: inline-block;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const CodeContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #00ff00;
  padding: 10px;
  overflow: auto;
  font-family: monospace;
`;

const HistorySection = styled.div`
  margin: 100px;
`;

const HistoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const HistoryItem = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FileInput = styled.input`
  display: none; /* Hide the default file input */
`;

export default Upload;
