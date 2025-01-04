import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faStar,
  faRocket,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import bg from "../assets/images/background-5.png";
import FAQs from "../components/FAQs";
import { KeyboardArrowRight, MailOutline } from "@mui/icons-material";



const Support = () => {
  return (
    <SupportContainer>
      <TextElements>
        <h1>We're here to help!</h1>
        <Paragraph>
          Choosing the right plan can be a big decision, and we want to make
          sure you find the one that fits your needs best. If you have any
          questions or if something’s not covered in our FAQ, we’re here for
          you. Just reach out in the way that’s easiest for you!
        </Paragraph>
      </TextElements>
      <OtherElements>
        <Logoleft>
          <div
            style={{
              background: "linear-gradient(90deg, #0b6fcb, #43a5fe)",
              padding: "7px",
              borderRadius: "8px",
            }}
          >
            <MailOutline sx={{ fontSize: "40px" }} />
          </div>
        </Logoleft>
        <ContentRight>
          <Bold>
            Send us a message <KeyboardArrowRight />{" "}
          </Bold>
          <p>We usually get back to you within a few hours.</p>
        </ContentRight>
      </OtherElements>
    </SupportContainer>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      icon: faStar,
      price: "$0",
      interval: "",
      features: [
        "10 credits per month",
        "Basic support",
        "Access to basic features",
      ],
      moreInfo: "Ideal for individuals who want to try out our service.",
    },
    {
      name: "Pro",
      icon: faRocket,
      price: "$19.99",
      interval: "/month",
      features: [
        "Unlimited credits",
        "Priority support",
        "Access to all features",
      ],
      moreInfo: "Perfect for professionals who need more credits and support.",
    },
    {
      name: "Enterprise",
      icon: faBuilding,
      price: "Contact us",
      interval: "",
      features: [
        "Custom solutions",
        "Dedicated support",
        "Access to all features",
      ],
      moreInfo: "Best for large organizations with custom needs.",
    },
  ];

  return (
    <>
      <Container>
        <ContentWrapper>
          <Header>
            <Title>Get a plan and start creating</Title>
          </Header>

          <CardsContainer>
            {plans.map((plan, index) => (
              <Card key={index}>
                <CardHeader>
                  <PlanName>
                    <PlanIcon icon={plan.icon} />
                    <PlanTitle>{plan.name}</PlanTitle>
                  </PlanName>
                  <Price>
                    {plan.price}
                    <span>{plan.interval}</span>
                  </Price>
                </CardHeader>
                <CardContent>
                  <FeaturesList>
                    {plan.features.map((feature, idx) => (
                      <Feature key={idx}>
                        <CheckIcon icon={faCheck} />
                        {feature}
                      </Feature>
                    ))}
                  </FeaturesList>
                  <SubscribeButton>Subscribe</SubscribeButton>
                  <MoreInfo>{plan.moreInfo}</MoreInfo>
                </CardContent>
              </Card>
            ))}
          </CardsContainer>

          <CompareSection>
            <CompareTitle>Compare Plans</CompareTitle>
            <Table>
              <thead>
                <tr>
                  <Th>Feature</Th>
                  {plans.map((plan, index) => (
                    <Th key={index}>{plan.name}</Th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Credits</Td>
                  <Td>10/month</Td>
                  <Td>Unlimited</Td>
                  <Td>Unlimited</Td>
                </tr>
                <tr>
                  <Td>Support</Td>
                  <Td>Basic</Td>
                  <Td>Priority</Td>
                  <Td>Dedicated</Td>
                </tr>
                <tr>
                  <Td>Custom Solutions</Td>
                  <Td>No</Td>
                  <Td>No</Td>
                  <Td>Yes</Td>
                </tr>
                <tr>
                  <Td>Access to All Features</Td>
                  <Td>No</Td>
                  <Td>Yes</Td>
                  <Td>Yes</Td>
                </tr>
              </tbody>
            </Table>
          </CompareSection>
        </ContentWrapper>
        <FAQs />
      </Container>
      <Support />
    </>
  );
};


const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 3rem 1rem;
  background-image: url(${bg});
  background-blend-mode: overlay;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const Card = styled.div`
  position: relative;
  background: rgba(15, 23, 42, 0.6);
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 255, 21, 0.2);
  transition: transform 0.2s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    background-size: 200% 200%;
    animation: ${gradientAnimation} 3s linear infinite;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;

const CardHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
`;

const PlanName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

const PlanTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
`;

const PlanIcon = styled(FontAwesomeIcon)`
  color: #3b82f6;
  font-size: 1.25rem;
`;

const Price = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  color: #3b82f6;

  span {
    font-size: 1rem;
    color: #94a3b8;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  color: white;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
`;

const CheckIcon = styled(FontAwesomeIcon)`
  color: #3b82f6;
`;

const SubscribeButton = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: #2563eb;
  }
`;

const MoreInfo = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #94a3b8;
  text-align: center;
`;

const CompareSection = styled.div`
  margin-top: 3rem;
  background: rgba(15, 23, 42, 0.6);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(59, 130, 246, 0.2);
`;

const CompareTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  color: white;
`;

const Th = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
  font-weight: 600;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
  text-align: left;
`;

const SupportContainer = styled.div`
  color: white;
  padding: 70px;
`;

const TextElements = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const OtherElements = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logoleft = styled.div`
  margin-right: 17px;
`;

const Paragraph = styled.p`
  width: 70%;
  text-align: center;
`;

const ContentRight = styled.div``;
const Bold = styled.p`
  font-weight: bold;
  font-size: large;
  text-align: left;
  margin-bottom: -10px;
  display: flex;
  align-items: center;
  justify-items: center;
`;


export default Pricing;
