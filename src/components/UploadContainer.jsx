import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import background from "../assets/images/bg-image.png";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

function UploadContainer() {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const uploadContainerRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set(
      [headingRef.current, subHeadingRef.current, uploadContainerRef.current],
      {
        opacity: 0,
        y: 20,
      }
    );

    // Create timeline
    const tl = gsap.timeline();

    // Animate title
    tl.fromTo(
      titleRef.current,
      {
        width: 0,
        opacity: 1,
      },
      {
        duration: 2,
        width: "auto",
        ease: "steps(25)",
      }
    )
      // Animate heading
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
      // Animate subheading
      .to(
        subHeadingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      )
      // Animate container
      .to(
        uploadContainerRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // Add cursor blink animation
    gsap.to(titleRef.current, {
      borderRight: "3px solid transparent",
      repeat: -1,
      duration: 0.8,
      ease: "steps(1)",
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleNavigate = () => {
    gsap.to(
      [
        titleRef.current,
        headingRef.current,
        subHeadingRef.current,
        uploadContainerRef.current,
      ],
      {
        y: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        onComplete: () => navigate("/signup"),
      }
    );
  };

  return (
    <Container>
      <StyledParagraph ref={titleRef}>
        Recreate AI Code Generator
      </StyledParagraph>
      <StyledHeading ref={headingRef}>
        Generate clean, reusable UI code <br />
      </StyledHeading>
      <SubHeading ref={subHeadingRef}>from screenshots/mockups</SubHeading>
      <UploadContainerDiv ref={uploadContainerRef}>
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
  height: 90vh;
  font-family: "Plus Jakarta Sans", sans-serif;
  gap: 20px;

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
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #0b6fcb;
  margin: 0;
  padding: 0;

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
  font-size: 60px;
  font-weight: 800;
  color: alicewhite;
  width: 90%;
  text-align: center;
  margin: 0;
  padding: 0;

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
  font-size: 60px;
  font-weight: 800;
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0;
  padding: 0;

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
  margin-top: 20px;

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
    transform: scale(1.08);
  }
`;

export default UploadContainer;
