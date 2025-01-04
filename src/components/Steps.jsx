import React from "react";
import styled from "styled-components";



function Steps() {
  const features = [
    {
      img: "https://teleporthq.io/design-to-code-import-400w.png",
      alt: "first-step",
      heading: "Import",
      description:
        "Discover a seamless designer to developer handoff with Recreate.",
    },
    {
      img: "https://teleporthq.io/design-to-code-customize-400w.png",
      alt: "second-step",
      heading: "Customize",
      description:
        "Build and customize projects with the drag-and-drop editor.",
    },
    {
      img: "https://teleporthq.io/design-to-code-export-400w.png",
      alt: "third-step",
      heading: "Export",
      description:
        "Turn your work into HTML, CSS, and 5 different JS frameworks.",
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
            <h3>{feature.heading}</h3>
            <p>{feature.description}</p>
          </FeatureCard>
        ))}
      </FeaturesContainer>
    </AllWrapper>
  );
}


const AllWrapper = styled.div`
  background-image: url("../assets/images/background-5.png");
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  margin: 0 8px;
  justify-content: space-evenly;
  padding: 20px;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 10px;
    gap: 10px;
  }
`;

const FeatureCard = styled.div`
  width: 23%;
  height: 320px;
  backdrop-filter: blur(40px);
  border: 1px inset #424286;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  padding: 20px;
  margin-bottom: 40px;
  transition: background 0.4s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #0a0c26, #101128);
  }

  h3 {
    font-size: 24px;
    color: white;
    margin: 10px 0;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 20px;
    color: white;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  background-color: #d1d1ff;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;


export default Steps;
