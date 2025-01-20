import React, { useState, useRef, useEffect, Suspense } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faDownload } from "@fortawesome/free-solid-svg-icons";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

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
  finalCode,
  setFinalCode,
}) {
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");
  const [hoveredHistory, setHoveredHistory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const codeModalRef = useRef(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (uploadedImage) {
        URL.revokeObjectURL(uploadedImage);
      }
    };
  }, [uploadedImage]);

  const generateDummyCode = (fileName) => {
    return `// Code generated for ${fileName}\n\nfunction example() {\n  console.log("This is a dummy code for ${fileName}");\n}`;
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);

      try {
        if (uploadedImage) {
          URL.revokeObjectURL(uploadedImage);
        }

        // Simulating processing time
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

        const code = generateDummyCode(file.name);
        setGeneratedCode(code);
        setShowCodeModal(true);
        setFinalCode(code);
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
  };

  const currentProject = projects.find(
    (project) => project.id === selectedProject
  );

  // GSAP animation for code modal
  useGSAP(() => {
    if (showCodeModal && codeModalRef.current) {
      gsap.fromTo(
        codeModalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 }
      );

      // Typewriter effect
      gsap.to(codeModalRef.current, {
        duration: generatedCode.length * 0.03,
        text: {
          value: generatedCode,
          delimiter: "",
        },
        ease: "none",
      });
    }
  }, [showCodeModal, generatedCode]);

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
          {/* <h2>Generated Code</h2> */}

          <CodeContainer>
            <Icons>
              <Codelanguage>{selectedLanguage}</Codelanguage>
              <Actualicons>
                <FontAwesomeIcon
                  style={{ paddingRight: "14px", fontSize: "20px", cursor: "pointer" }}
                  icon={faCopy}
                />
                <FontAwesomeIcon
                  style={{ paddingRight: "14px", fontSize: "20px", cursor: "pointer" }}
                  icon={faDownload}
                />
              </Actualicons>
            </Icons>
            <pre>{finalCode || "// No code generated yet."}</pre>
          </CodeContainer>
        </RightElements>

        {showCodeModal && (
          <>
            <Backdrop onClick={() => setShowCodeModal(false)} />
            <CodeModalContainer ref={codeModalRef}>
              <CloseButton onClick={() => setShowCodeModal(false)}>
                ×
              </CloseButton>
              <pre></pre>
            </CodeModalContainer>
          </>
        )}
      </HandleImageContainer>

      <HistorySection>
        <SectionTitle>CONVERSION HISTORY</SectionTitle>
        <HistoryList>
          {currentProject?.history.length > 0 ? (
            currentProject.history.map((item, index) => (
              <HistoryItemWrapper
                key={item.id || index}
                onMouseEnter={() => setHoveredHistory(item.id)}
                onMouseLeave={() => setHoveredHistory(null)}
              >
                <HistoryItem
                  onClick={() => {
                    const code = generateDummyCode(item.name);
                    setGeneratedCode(code);
                    setShowCodeModal(true);
                  }}
                >
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
            ))
          ) : (
            <NoHistoryText>No conversion history yet.</NoHistoryText>
          )}
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
  width: 100%;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  // width: 100%;
  border-radius: 10px 10px 0px 0px;
  color: white;
  background-color: rgb(48, 48, 48);
  padding: 10px;
`;

const Actualicons = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: flex-end;
`;

const Codelanguage = styled.p`
  flex: 0.2;
`;

const HandleImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
  height: 60vh;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;

const LeftElements = styled.div`
  flex: 5;
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
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
`;

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

const DropdownContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: monospace;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const LanguageDropdown = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #111;
  color: #00ff00;
  font-family: monospace;
`;

const FileInput = styled.input`
  display: none;
`;

const CodeContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #00ff00;
  font-family: monospace;
`;

const CodeModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 80%;
  max-width: 500px;
  height: auto;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.9);
  color: #00ff00;
  font-family: monospace;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #00ff00;
  font-size: 24px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(2px);
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const HistorySection = styled.div`
  margin-top: 40px;
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

const NoHistoryText = styled.div`
  text-align: center;
  padding: 20px;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
`;

export default Upload;
