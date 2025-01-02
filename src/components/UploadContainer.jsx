import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import styled from "styled-components";
import background from '../assets/images/bg-image.png';

function UploadContainer() {
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
  `;

  const StyledParagraph = styled.p`
    background: linear-gradient(90deg, #0b6fcb, #43a5fe);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;

  const StyledHeading = styled.h1`
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 60px;
    font-weight: 800;
    margin-top: -10px;
    color: "alicewhite";
    width: 90%;
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
  `;

  const UploadContainerDiv = styled.div`
    padding: 39px;
    width: 24%;
    border-radius: 10px;
    backdrop-filter: blur(40px);
    position: relative;
    z-index: 1;
    border: 1px solid rgb(69, 69, 69);
  `;

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
