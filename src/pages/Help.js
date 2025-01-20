import React from "react";
import styled from "styled-components";
import bg from "../assets/images/background-5-transformed.webp";

function HelpCenter() {
  return (
    <HelpContainer>
      <ContentWrapper>
        <Header>
          <Title>How can we help?</Title>
          <Subtitle>
            Find answers to common questions and learn how to make the most of
            Recreate
          </Subtitle>
          <SearchBar placeholder="Search for help articles..." />
        </Header>

        <GridContainer>
          <CategoryCard>
            <CategoryTitle>Getting Started</CategoryTitle>
            <LinkList>
              <LinkItem>
                <StyledLink href="/help/quickstart">
                  Quick Start Guide
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink href="/help/upload">
                  Uploading Your First Project
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink href="/help/ai-features">
                  Understanding AI Features
                </StyledLink>
              </LinkItem>
            </LinkList>
          </CategoryCard>

          <CategoryCard>
            <CategoryTitle>Project Management</CategoryTitle>
            <LinkList>
              <LinkItem>
                <StyledLink href="/help/version-control">
                  Version Control Guide
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink href="/help/collaboration">
                  Team Collaboration
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink href="/help/export">Exporting Projects</StyledLink>
              </LinkItem>
            </LinkList>
          </CategoryCard>

          <CategoryCard>
            <CategoryTitle>AI Tools</CategoryTitle>
            <LinkList>
              <LinkItem>
                <StyledLink href="/help/image-recognition">
                  Image Recognition
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink href="/help/design-recommendations">
                  Design Recommendations
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink href="/help/content-generation">
                  AI Content Generation
                </StyledLink>
              </LinkItem>
            </LinkList>
          </CategoryCard>

          <CategoryCard>
            <CategoryTitle>Account & Billing</CategoryTitle>
            <LinkList>
              <LinkItem>
                <StyledLink href="/help/plans">Plans & Pricing</StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink href="/help/billing">Billing Management</StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink href="/help/security">Security Settings</StyledLink>
              </LinkItem>
            </LinkList>
          </CategoryCard>

          <CategoryCard>
            <CategoryTitle>Integrations</CategoryTitle>
            <LinkList>
              <LinkItem>
                <StyledLink href="/help/adobe">
                  Adobe Suite Integration
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink href="/help/figma">Figma Integration</StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink href="/help/cloud-storage">
                  Cloud Storage Setup
                </StyledLink>
              </LinkItem>
            </LinkList>
          </CategoryCard>

          <CategoryCard>
            <CategoryTitle>Troubleshooting</CategoryTitle>
            <LinkList>
              <LinkItem>
                <StyledLink href="/help/performance">
                  Performance Optimization
                </StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink href="/help/errors">Common Errors</StyledLink>
              </LinkItem>
              <LinkItem>
                <StyledLink href="/help/requirements">
                  System Requirements
                </StyledLink>
              </LinkItem>
            </LinkList>
          </CategoryCard>
        </GridContainer>

        <ContactSection>
          <ContactTitle>Still need help?</ContactTitle>
          <ContactText>
            Our support team is available 24/7 to assist you with any questions
          </ContactText>
          <Button>Contact Support</Button>
        </ContactSection>
      </ContentWrapper>
    </HelpContainer>
  );
}

const HelpContainer = styled.div`
  padding: 48px 24px;
  min-height: 100vh;
  background-image: url(${bg});
  background-attachment: fixed;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 16px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6772e5;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 2px solid #6772e5;
  font-size: 1.1rem;
  margin: 32px 0;
  transition: border-color 0.2s;

  &:focus {
    border-color: #6772e5;
    outline: none;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const CategoryCard = styled.div`
  backdrop-filter: blur(40px);
  border-radius: 12px;
  border: 1px solid #6772e5;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 16px;
  font-weight: 600;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin: 12px 0;
`;

const StyledLink = styled.a`
  color: #6772e5;
  text-decoration: none;
  font-size: 1.1rem;
  display: block;
  padding: 8px 0;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactSection = styled.div`
  margin-top: 64px;
  text-align: center;
  padding: 32px;
  backdrop-filter: blur(40px);
  border: 1px solid #6772e5;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: white;
  margin-bottom: 16px;
`;

const ContactText = styled.p`
  color: #6772e5;
  font-size: 1.1rem;
  margin-bottom: 24px;
`;

const Button = styled.button`
  background: rgb(85, 98, 239);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgb(55, 62, 148);
  }
`;

export default HelpCenter;
