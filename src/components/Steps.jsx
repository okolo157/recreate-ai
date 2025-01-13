import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

function Steps() {
  const features = [
    {
      img: "https://teleporthq.io/design-to-code-import-400w.png",
      alt: "first-step",
      heading: "Import",
      subheading: "Seamlessly bring your designs to life:",
      description1: "Extract UI components directly using Figma's API.",
      description2: "Start with your existing images or design files.",
    },
    {
      img: "https://teleporthq.io/design-to-code-customize-400w.png",
      alt: "second-step",
      heading: "Customize",
      subheading: "Personalize your project with ease:",
      description1:
        "Turn your work into HTML, CSS, and 5 different JS frameworks.",
      description2: "Modify layouts, typography, and styles effortlessly.",
    },
    {
      img: "https://teleporthq.io/design-to-code-export-400w.png",
      alt: "third-step",
      heading: "Export",
      subheading: "Generate production-ready code:",
      description1: "Get clean code for your projects.",
      description2: "Export to React, Next.js, Vue, and more.",
    },
  ];

  return (
    <AllWrapper>
      <Title>
        From design to <code>{"<code>"}</code> in 3 easy steps ⤵
      </Title>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <ImageContainer>
              <img src={feature.img} alt={feature.alt} />
            </ImageContainer>
            <Description>
              <h3>{feature.heading}</h3>
              <p>{feature.subheading}</p>
              <ul>
                <StepListItem>
                  <FontAwesomeIcon
                    style={{
                      marginRight: "10px",
                      marginTop: "5px",
                      color: "#ffcc00",
                    }}
                    icon={faSquareCheck}
                  />
                  {feature.description1}
                </StepListItem>
                <StepListItem>
                  <FontAwesomeIcon
                    style={{
                      marginRight: "10px",
                      marginTop: "5px",
                      color: "#ffcc00",
                    }}
                    icon={faSquareCheck}
                  />
                  {feature.description2}
                </StepListItem>
              </ul>
            </Description>
          </FeatureCard>
        ))}
      </FeaturesContainer>
    </AllWrapper>
  );
}

const AllWrapper = styled.div`
  background: linear-gradient(135deg, rgba(16, 17, 40, 0.9), rgba(0, 0, 0, 0.7)),
    url("../assets/images/background-5.png");
  background-size: cover;
  background-position: center;
  padding: 40px 30px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const Description = styled.div`
  p {
    font-size: 20px;
    color: #e0e0ff;
  }
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 34px;
    margin-bottom: 20px;
  }
`;

const StepListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const FeatureCard = styled.div`
  width: 25%;
  min-width: 280px;
  backdrop-filter: blur(20px);
  border: 1px solid #424286;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  background: rgba(16, 17, 40, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 30px;
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05) translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #1e1e4a, #0f0f33);
  }

  h3 {
    font-size: 24px;
    color: #ffffff;
    font-weight: 600;
    margin: 10px 0;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      color: #ffffff;
      font-size: 16px;
      line-height: 1.5;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 160px;
  background-color: #d1d1ff;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Steps;
