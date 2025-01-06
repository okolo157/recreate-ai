import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import bg from "../assets/images/background-5.png";

function PricingComponent() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "10 credits per month",
        "Basic support",
        "Access to basic features",
      ],
    },
    {
      name: "Pro",
      price: "$19.99",
      priceSmall: "/month",
      features: [
        "Unlimited credits",
        "Priority support",
        "Access to all features",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact us",
      features: [
        "Custom solutions",
        "Dedicated support",
        "Access to all features",
      ],
    },
  ];

  return (
    <PricingContainer>
      <HeaderContainer>
        <TextElements>
          <Title>Get a plan and start creating</Title>
          <Subtitle>
            Intelligent, fast, and familiar, Recreate is the best way to code
            with AI.
          </Subtitle>
        </TextElements>
        <MoreButton>See more features</MoreButton>
      </HeaderContainer>
      <PricingWrapper>
        {plans.map((plan, index) => (
          <PricingCard key={index}>
            <PlanName>{plan.name}</PlanName>
            <Price>
              {plan.price}
              {plan.priceSmall && <PriceSmall>{plan.priceSmall}</PriceSmall>}
            </Price>
            <FeaturesContainer>
              <FeaturesList>
                {plan.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <CheckIcon icon={faCheck} />
                    {feature}
                  </FeatureItem>
                ))}
              </FeaturesList>
            </FeaturesContainer>
            <SubscribeButton>Subscribe</SubscribeButton>
          </PricingCard>
        ))}
      </PricingWrapper>
    </PricingContainer>
  );
}

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  padding-bottom: 150px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;

  @media (max-width: 768px) {
    padding: 20px;
    padding-bottom: 100px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 44px;
  flex-direction: column;
`;

const MoreButton = styled.button`
  border-radius: 24px;
  background-color: #43a5fe;
  border: none;
  color: white;
  padding: 17px;
  font-size: 17px;

  &:hover {
    background-color:rgb(0, 110, 214);
    cursor: pointer;
    transition: 0.3s ease
  }
`;

const Subtitle = styled.p`
  font-size: large;
  color: grey;
`;

const TextElements = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 10px;
  color: white;

  @media (max-width: 768px) {
    font-size: 2em;
    text-align: center;
  }
`;

const PricingWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const PricingCard = styled.div`
  backdrop-filter: blur(20px);
  border: groove 1px green;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 300px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const PlanName = styled.h3`
  font-size: 1.5em;
  font-weight: 600;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const Price = styled.p`
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 20px;
  color: #43a5fe;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const PriceSmall = styled.span`
  font-size: 0.8em;
  color: #b0c4de;

  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeatureItem = styled.li`
  font-size: 1em;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const CheckIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #43a5fe;
`;

const SubscribeButton = styled.button`
  background-color: #43a5fe;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #0b6fcb;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
  }
`;

export default PricingComponent;
