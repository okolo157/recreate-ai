import React, { useState, useRef } from "react";
import styled from "styled-components";

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");
    const fileInputRef = useRef(null);  

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("File selected:", file);
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
          <p>Click anywhere to upload image</p>
          <FileInput
            type="file"
            accept="image/*"
            onChange={onFileChange}
            ref={fileInputRef}
          />
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
`;

const HandleImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
  height: 40vh;
  gap: 20px
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

const FileInput = styled.input`
  display: none; /* Hide the default file input */
`;

export default Upload;
