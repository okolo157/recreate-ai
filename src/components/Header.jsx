import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import background from "../assets/images/bg-image.webp";

// Register GSAP plugins
function Header() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a local variable for the container reference
    const container = containerRef.current;

    // Select all text elements within the container
    const textElements = container.querySelectorAll("p, h1, div");

    // Set initial state for all text elements
    gsap.set(textElements, {
      opacity: 0,
      y: -50, // Start above the view
    });

    // Animate each text element downward one by one
    gsap.to(textElements, {
      opacity: 1,
      y: 0, // Move to the original position
      duration: 0.5,
      stagger: 0.2, // Delay between each animation
      ease: "power1.out",
    });

    return () => {
      // Clean up animations for all text elements
      gsap.killTweensOf(textElements);
    };
  }, []);

  const handleNavigate = () => {
    gsap.to(containerRef.current, {
      y: 50, // Animate downward
      opacity: 0,
      duration: 0.5,
      onComplete: () => navigate("/signup"),
    });
  };

  return (
    <Container ref={containerRef}>
      <StyledParagraph>Recreate AI Code Generator</StyledParagraph>
      <BigText>
        <StyledHeading>
          Generate clean, <br /> Reusable UI code
        </StyledHeading>
        <SubHeading>
          from Screenshots
          <br /> or Mockups
        </SubHeading>
      </BigText>
      <UploadContainerDiv>
        <StyledButton onClick={handleNavigate}>Get Started</StyledButton>
      </UploadContainerDiv>
    </Container>
  );
}

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
  min-height: 90vh;
  width: 100%;
  font-family: "Plus Jakarta Sans", sans-serif;
  gap: 20px;
  padding: clamp(20px, 5vw, 40px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: 80vh;
    gap: 15px;
  }
`;

const BigText = styled.div`
  width: min(90%, 1200px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: clamp(10px, 3vw, 30px);
  box-sizing: border-box;

`;

const StyledParagraph = styled.p`
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: clamp(16px, 4vw, 24px);
  margin: 0;
  text-align: center;
`;

const StyledHeading = styled.h1`
  font-size: clamp(28px, 6vw, 60px);
  font-weight: 800;
  color: alicewhite;
  margin: 0;
  line-height: 1.2;
`;

const SubHeading = styled.div`
  font-size: clamp(28px, 6vw, 60px);
  font-weight: 800;
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  line-height: 1.2;
`;

const UploadContainerDiv = styled.div`
  padding: clamp(20px, 4vw, 39px);
  width: min(80%, 400px);
  border-radius: 30px;
  backdrop-filter: blur(40px);
  border: 1px solid rgb(69, 69, 69);
  margin-top: clamp(10px, 2vw, 20px);
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  color: white;
  border: none;
  padding: clamp(12px, 2vw, 16px) clamp(20px, 4vw, 32px);
  border-radius: 24px;
  font-size: clamp(16px, 3vw, 18px);
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default Header;
