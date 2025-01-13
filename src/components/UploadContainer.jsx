import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import background from "../assets/images/bg-image.png";


function UploadContainer() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <Container style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <StyledParagraph>Recreate AI Code Generator</StyledParagraph>
      <StyledHeading>
        Generate clean, reusable UI code <br />
        <SubHeading>from screenshots/mockups</SubHeading>
      </StyledHeading>
      <UploadContainerDiv>
        <StyledButton onClick={handleNavigate}>Get Started</StyledButton>
      </UploadContainerDiv>
    </Container>
  );
}


const typewriter = keyframes`
  from { width: 0; }
  to { width: 25%; }
`;

const blink = keyframes`
  from { border-right-color: transparent }
  to { border-right-color: #0b6fcb }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  background-attachment: fixed;
  
  height: 90vh;

  @media (max-width: 1200px) {
    height: 85vh;
    padding: 40px 20px;
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 30px 15px;
    min-height: 80vh;
  }
  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const StyledParagraph = styled.p`
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #0b6fcb;
  animation: ${typewriter} 2s steps(25) 1s forwards,
    ${blink} 0.8s steps(25) infinite;

  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    animation: ${keyframes`
      from { width: 0; }
      to { width: 50%; }
    `} 2s steps(20, end) forwards;
  }
`;

const StyledHeading = styled.h1`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 60px;
  font-weight: 800;
  margin-top: -10px;
  color: alicewhite;
  width: 90%;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 3s forwards;

  @media (max-width: 1200px) {
    font-size: 50px;
    width: 95%;
  }
  @media (max-width: 768px) {
    font-size: 40px;
    width: 100%;
  }
  @media (max-width: 480px) {
    font-size: 32px;
    br {
      display: none;
    }
  }
`;

const SubHeading = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 60px;
  font-weight: 800;
  margin-top: -10px;
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 3.5s forwards;

  @media (max-width: 1200px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const UploadContainerDiv = styled.div`
  padding: 39px;
  width: 24%;
  border-radius: 30px;
  backdrop-filter: blur(40px);
  position: relative;
  border: 1px solid rgb(69, 69, 69);
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 4s forwards;

  @media (max-width: 1200px) {
    width: 35%;
    padding: 30px;
  }
  @media (max-width: 768px) {
    width: 80%;
    padding: 25px;
  }
  @media (max-width: 480px) {
    width: 80%;
    padding: 20px;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 24px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;


export default UploadContainer;
