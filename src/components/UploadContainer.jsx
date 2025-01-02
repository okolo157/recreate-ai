import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import styled from "styled-components";
import background from "../assets/images/bg-image.png";

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
`;

const StyledHeading = styled.h1`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 60px;
  font-weight: 800;
  margin-top: -10px;
  color: alicewhite;
  width: 90%;
  text-align: center;

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
  border-radius: 10px;
  backdrop-filter: blur(40px);
  position: relative;
  z-index: 1;
  border: 1px solid rgb(69, 69, 69);

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

function UploadContainer() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/upload");
  };

  return (
    <Container style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <StyledParagraph>Recreate AI Code Generator</StyledParagraph>
      <StyledHeading>
        Generate clean, reusable UI code <br />
        <SubHeading>from screenshots/mockups</SubHeading>
      </StyledHeading>
      <UploadContainerDiv>
        <ButtonComponent
          Text="Try for free"
          disclaimer="10 credits left"
          handleNavigate={handleNavigate}
        />
      </UploadContainerDiv>
    </Container>
  );
}

export default UploadContainer;
