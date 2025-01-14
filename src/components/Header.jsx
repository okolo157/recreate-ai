import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import background from "../assets/images/bg-image.png";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

function Header() {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const uploadContainerRef = useRef(null);

  // Utility function to split text into spans
  const splitText = (element) => {
    const text = element.textContent;
    element.textContent = "";
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char; // Handle spaces
      element.appendChild(span);
    });
  };

 useEffect(() => {
   // Split text for animations
   splitText(titleRef.current);
   splitText(headingRef.current);
   splitText(subHeadingRef.current);

   // Select all spans
   const titleSpans = titleRef.current.querySelectorAll("span");
   const headingSpans = headingRef.current.querySelectorAll("span");
   const subHeadingSpans = subHeadingRef.current.querySelectorAll("span");

   // Set initial states
   gsap.set([titleSpans, headingSpans, subHeadingSpans], {
     opacity: 0,
     y: 50,
     rotateX: 90,
   });

   gsap.set(uploadContainerRef.current, {
     opacity: 0,
     scale: 0.8,
   });

   // Create timeline
   const tl = gsap.timeline({ delay: 0.5 });

   // Animate title
   tl.to(titleSpans, {
     opacity: 1,
     y: 0,
     rotateX: 0,
     duration: 1.2,
     stagger: 0.05,
     ease: "back.out(1.7)",
   })
     // Animate heading
     .to(
       headingSpans,
       {
         opacity: 1,
         y: 0,
         rotateX: 0,
         duration: 1,
         stagger: 0.04,
         ease: "elastic.out(1, 0.5)",
       },
       "-=0.5"
     )
     // Animate subheading
     .to(
       subHeadingSpans,
       {
         opacity: 1,
         y: 0,
         rotateX: 0,
         duration: 1,
         stagger: 0.03,
         ease: "power4.out",
       },
       "-=0.8"
     )
     // Animate container with bounce effect
     .to(
       uploadContainerRef.current,
       {
         opacity: 1,
         scale: 1,
         duration: 1,
         ease: "bounce.out",
       },
       "-=0.5"
     );

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

export default Header;
