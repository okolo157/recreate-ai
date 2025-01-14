import React from "react";
import { DesignServices, DeveloperMode, Message } from "@mui/icons-material";
import styled from "styled-components";
import bg from "../assets/images/galaxy-bg.jpg";

function Teams() {
  const features = [
    {
      icon: <DesignServices />,
      heading: "Designers",
      description:
        "Create responsive prototypes using Figma. With the Figma plugin, they can export their projects to Recreate.",
    },
    {
      icon: <DeveloperMode />,
      heading: "Developers",
      description:
        "Speed up the process and build on existing designs to create functional apps or websites that can be exported to code.",
    },
    {
      icon: <Message />,
      heading: "Product & Marketing",
      description:
        "Can take control over their future website by previewing, testing, and making all the necessary changes on the fly",
    },
  ];

  return (
    <AllTeams>
      <h2>Connect the dots between teams</h2>
      <FeaturesTeams>
        {features.map((feature, index) => (
          <FeatureTeam key={index}>
            {feature.icon}
            <h3>{feature.heading}</h3>
            <Paragraph>{feature.description}</Paragraph>
          </FeatureTeam>
        ))}
      </FeaturesTeams>
    </AllTeams>
  );
}

const AllTeams = styled.div`
  // margin-top: 80px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bg});
  background-size: cover;
  background-position: center;
  padding: 40px;
  background-attachment: fixed;
  padding: 20px;

  h2 {
    color: white;
    font-size: 40px;

    @media (max-width: 768px) {
      font-size: 32px;
      text-align: center;
    }
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 16px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const FeaturesTeams = styled.div`
  display: flex;
  margin: 0px 8px 0px;
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

const FeatureTeam = styled.div`
  width: 23%;
  height: 220px;
  backdrop-filter: blur(40px);
  border: 1px inset #424286;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-bottom: 40px;
  color: white;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  h3 {
    font-size: 24px;
    color: white;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    all: unset;
    font-size: 20px;
    color: white;

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

const Paragraph = styled.p`
  background: white;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default Teams;
