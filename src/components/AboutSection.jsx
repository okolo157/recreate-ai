import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import bg from "../assets/images/gen-ai.webp";

const SectionContainer = styled.div`
  display: flex;
  background-image: url("https://wphtml.com/html/tf/aithm-demo/assets/img/banner/background-7.png");
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
`;

const Left = styled.div`
  flex: 50%;
`;

const RightSide = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
`;

const Image = styled.img`
  width: 70%;
`;

const Title = styled.h2`
  font-size: xxx-large;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  text-align: left;
  width: 80%;
`;

const CheckElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 18px;
  padding: 10px;
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
`;

const Paragraph = styled.p`
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function AboutSection() {
  return (
    <SectionContainer>
      <Left>
        <Image src={bg} height="700px" alt="left side" />
      </Left>
      <RightSide>
        <Paragraph style={{ marginBottom: "-20px" }}>
          What recreate can do
        </Paragraph>
        <Title>Code Quicker with Recreate.</Title>
        <Subtitle>
          Our AI systems can analyze data, to provide pixel perfect code for
          your UI element, from simple to even more complex elements.
        </Subtitle>
        <CheckElementsContainer>
          <CheckElement>
            <FontAwesomeIcon
              icon={faCheck}
              color="white"
              style={{ marginRight: "14px" }}
            />
            <Paragraph>Accurate Detection</Paragraph>
          </CheckElement>
          <CheckElement>
            <FontAwesomeIcon
              icon={faCheck}
              color="white"
              style={{ marginRight: "14px" }}
            />
            <Paragraph>Quicker coding</Paragraph>
          </CheckElement>
          <CheckElement>
            <FontAwesomeIcon
              icon={faCheck}
              color="white"
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

export default AboutSection;
