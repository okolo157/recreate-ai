import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import bg from "../assets/images/gen-ai.webp";
import bg2 from "../assets/images/galaxy-bg.webp";

function AboutSection() {
  return (
    <SectionContainer>
      <Left>
        <Image src={bg} alt="left side" />
      </Left>
      <RightSide>
        <Title>Code Quicker with Recreate.</Title>
        <Subtitle>
          Our AI systems can analyze data, to provide pixel perfect code for
          your UI element, from simple to even more complex elements.
        </Subtitle>
        <CheckElementsContainer>
          <CheckElement>
            <FontAwesomeIcon
              icon={faCheck}
              color="#43a5fe"
              size="2x"
              style={{ marginRight: "14px" }}
            />
            <Paragraph>Accurate Detection</Paragraph>
          </CheckElement>
          <CheckElement>
            <FontAwesomeIcon
              icon={faCheck}
              color="#43a5fe"
              size="2x"
              style={{ marginRight: "14px" }}
            />
            <Paragraph>Quicker coding</Paragraph>
          </CheckElement>
          <CheckElement>
            <FontAwesomeIcon
              icon={faCheck}
              color="#43a5fe"
              size="2x"
              style={{ marginRight: "14px" }}
            />
            <Paragraph>Easy to use</Paragraph>
          </CheckElement>
        </CheckElementsContainer>
        <AboutButton to="/signup">Get Started</AboutButton>
      </RightSide>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url(${bg2});
  background-size: cover;
  background-position: center;
  padding: 40px;
  background-attachment: fixed;
  font-family: "Plus Jakarta Sans", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 0px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-top: 40px;
  }
`;

const Left = styled.div`
  flex: 50%;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const RightSide = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 20px;
  }
`;

const Image = styled.img`
  width: 70%;

  @media (max-width: 768px) {
    width: 390px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: fit-content;
  }
`;

const Title = styled.h2`
  font-size: xxx-large;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`;

const Subtitle = styled.h3`
  text-align: left;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const CheckElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 18px;
  padding: 10px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const CheckElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: -10px;
`;

const AboutButton = styled(Link)`
  font-size: 18px;
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  border: none;
  padding: 14px;
  margin: 10px;
  cursor: pointer;
  width: 140px;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 70%;
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }
`;

const Paragraph = styled.p`
  color: white;
  font-weight: bold;
`;

export default AboutSection;
