import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import bg from "../assets/images/background-5.png";

function Settings() {
  const [showDelete, setShowDelete] = useState(false);

  const navigate = useNavigate();

  //temp hardcoded values
  const storageUsage = 70;
  const apiCallsUsed = 400;
  const apiCallsLimit = 1000;

  return (
    <Container>
      <Left>
        <BasicInfo>
          <CardHeader>
            <Title>Basic Information</Title>
          </CardHeader>
          <CardContent>
            <InfoGroup>
              <InfoItem>
                <strong>Name:</strong>
                <p>Victor Okolo</p>
              </InfoItem>
              <InfoItem>
                <strong>Email:</strong>
                <p>Okolodubem9@gmail.com</p>
              </InfoItem>
            </InfoGroup>
          </CardContent>
        </BasicInfo>

        <AccountInfo>
          <CardHeader>
            <HeaderGroup>
              <Title>Account Information</Title>
              <PlanBadge>Free Trial 14 days remaining</PlanBadge>
            </HeaderGroup>
          </CardHeader>
          <CardContent>
            <ButtonGroup>
              <StyledButton>UPGRADE TO PRO</StyledButton>
              <StyledButton>UPGRADE TO BUSINESS</StyledButton>
            </ButtonGroup>

            <AdvancedSection>
              <AdvancedButton
                onClick={() => {
                  setShowDelete(!showDelete);
                }}
              >
                Advanced
                <CaretIcon>{showDelete ? "▲" : "▼"}</CaretIcon>
              </AdvancedButton>

              {showDelete && <DeleteButton>Delete Account</DeleteButton>}
            </AdvancedSection>
          </CardContent>
        </AccountInfo>
      </Left>
      <Right>
        <UsageInfo>
          <CardHeader>
            <Title>Usage Information</Title>
          </CardHeader>
          <CardContent>
            <InfoRow>
              <StatTitle>Storage Used</StatTitle>
              <StatValue>{storageUsage}%</StatValue>
            </InfoRow>
            <ProgressBar>
              <ProgressFill percent={storageUsage} color="#4caf50" />
            </ProgressBar>

            <InfoRow>
              <StatTitle>API Calls</StatTitle>
              <StatValue>
                {apiCallsUsed}/{apiCallsLimit}
              </StatValue>
            </InfoRow>
            <ProgressBar>
              <ProgressFill
                percent={(apiCallsUsed / apiCallsLimit) * 100}
                color="#2196f3"
              />
            </ProgressBar>

            <InfoRow>
              <StatTitle>Plan Usage</StatTitle>
              <StatValue>Free Trial - 14 Days Left</StatValue>
            </InfoRow>

            <SeeMoreButton onClick={() => navigate("/stats")}>
              See More
            </SeeMoreButton>
          </CardContent>
        </UsageInfo>
      </Right>
      ;
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;
  text-align: left;
  background-image: url(${bg});
  background-position: center;
  background-blend-mode: overlay;
  background-attachment: fixed;
  font-family: "'Plus Jakarta Sans', sans-serif";
`;

const BasicInfo = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  height: 30vh;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  // background-color: #0d132a;
  backdrop-filter: blur(10px);
`;

const AccountInfo = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  height: 30vh;
  padding: 20px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // align-content: center;
`;

const UsageInfo = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  height: 40vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  backdrop-filter: blur(10px);
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const StatTitle = styled.p`
  color: #fff;
  margin: 0;
  font-size: 0.9rem;
`;

const StatValue = styled.p`
  color: #fff;
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: grey;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 8px;
`;

const ProgressFill = styled.div`
  width: ${({ percent }) => percent}%;
  height: 100%;
  background-color: ${({ color }) => color || "#fff"};
`;

const SeeMoreButton = styled.button`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 20px;
`;

const CardContent = styled.div``;

const Title = styled.h2`
  color: #fff;
  margin: 0;
`;

const HeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  strong {
    font-weight: 600;
  }

  p {
    margin: 0;
  }
`;

const Left = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  flex: 0.6;
`;

const PlanBadge = styled.button`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 0.875rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  flex: 1;
  height: 40px;
  cursor: pointer;
  color: #fff;
  border: 1px solid white;
  background-color: #05051e;
  border-radius: 3px;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }
`;

const AdvancedSection = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AdvancedButton = styled.button`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const CaretIcon = styled.span`
  display: inline-block;
  font-size: 0.75rem;
`;

const DeleteButton = styled.button`
  color: grey;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  transition: color 0.2s;
  justify-self: flex-start;
  align-self: flex-start;

  &:hover {
    color: #fff;
  }
`;

export default Settings;
