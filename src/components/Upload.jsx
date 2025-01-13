import React, { useState, useRef, useEffect, Suspense } from "react";
import styled from "styled-components";

const LazyImage = React.lazy(() =>
  Promise.resolve({
    default: ({ src, alt }) => (
      <ImageWrapper>
        <StyledImage src={src} alt={alt} />
      </ImageWrapper>
    ),
  })
);

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
  const [hoveredHistory, setHoveredHistory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      // Cleanup any existing object URLs
      if (uploadedImage) {
        URL.revokeObjectURL(uploadedImage);
      }
    };
  }, [uploadedImage]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);

      try {
        if (uploadedImage) {
          URL.revokeObjectURL(uploadedImage);
        }

        // Simulating some processing time
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl);
        setSelectedFile(file);
        setIsImageUploaded(true);

        const imageMetadata = {
          id: Date.now(),
          name: file.name,
          type: file.type,
          size: file.size,
          timestamp: new Date().toISOString(),
        };

        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project.id === selectedProject
              ? {
                  ...project,
                  history: [...project.history, imageMetadata],
                }
              : project
          )
        );
      } catch (error) {
        console.error("Error processing image:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    console.log("Selected language:", event.target.value);
  };

  const renderHistory = () => {
    const currentProject = projects.find(
      (project) => project.id === selectedProject
    );

    return currentProject?.history.map((item) => (
      <HistoryItem key={item.id}>
        <HistoryItemDetails>
          <div>{item.name}</div>
          <div>{new Date(item.timestamp).toLocaleDateString()}</div>
          <div>{(item.size / 1024).toFixed(2)} KB</div>
        </HistoryItemDetails>
      </HistoryItem>
    ));
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
          <FileInput
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
          />

          {isLoading ? (
            <LoadingContainer>
              <Spinner />
              <LoadingText>Processing image...</LoadingText>
            </LoadingContainer>
          ) : !isImageUploaded ? (
            <UploadPrompt>Click anywhere to upload image</UploadPrompt>
          ) : (
            <Suspense
              fallback={
                <LoadingContainer>
                  <Spinner />
                </LoadingContainer>
              }
            >
              <LazyImage src={uploadedImage} alt="Uploaded" />
            </Suspense>
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
        <SectionTitle>CONVERSION HISTORY</SectionTitle>
        <HistoryList>
          {projects
            .find((project) => project.id === selectedProject)
            ?.history.map((item, index) => (
              <HistoryItemWrapper
                key={item.id || index}
                onMouseEnter={() => setHoveredHistory(item.id)}
                onMouseLeave={() => setHoveredHistory(null)}
              >
                <HistoryItem>
                  <HistoryName>
                    <FileIcon>📄</FileIcon>
                    <div>
                      <FileName>{item.name || `File ${index + 1}`}</FileName>
                      <FileDetails>
                        {new Date(item.timestamp).toLocaleDateString()} •
                        {(item.size / 1024).toFixed(2)} KB
                      </FileDetails>
                    </div>
                  </HistoryName>
                  {hoveredHistory === item.id && (
                    <ActionButton>
                      <svg
                        width="16"
                        height="4"
                        viewBox="0 0 16 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2" r="2" fill="white" />
                        <circle cx="8" cy="2" r="2" fill="white" />
                        <circle cx="14" cy="2" r="2" fill="white" />
                      </svg>
                    </ActionButton>
                  )}
                </HistoryItem>
              </HistoryItemWrapper>
            ))}
        </HistoryList>
      </HistorySection>
    </UploadPageContainer>
  );
}


const HistoryItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
`;


const UploadPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  color: white;
  padding: 20px;
`;

const HandleImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
  height: 40vh;
  gap: 20px;
`;

// Upload Area Components
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
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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

// Loading Components
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingText = styled.div`
  font-size: 14px;
  color: white;
  opacity: 0.8;
`;

const UploadPrompt = styled.p`
  color: white;
  font-size: 16px;
  opacity: 0.8;
`;

// Form Components
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
  color: white;
`;

const FileInput = styled.input`
  display: none;
`;

// Code Display Components
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

// History Components
const HistorySection = styled.div`
  margin-top: 30px;
  width: 80%;
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HistoryItemWrapper = styled.div`
  position: relative;
`;

const HistoryItem = styled.div`
  padding: 12px 16px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

// History Item Components
const HistoryName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

const FileIcon = styled.span`
  font-size: 20px;
`;

const FileName = styled.div`
  font-weight: 500;
  color: white;
`;

const FileDetails = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

const SectionTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  padding: 0 12px;
  margin-bottom: 8px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  svg circle {
    fill: white;
  }
`;

export default Upload;
