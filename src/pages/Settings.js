import React from "react";
import styled from "styled-components";

function Settings() {
  return (
    <Container>
      <Left>
        <BasicInfo>
          <Title>Basic Information</Title>
          <InfoText>Here you can update your personal details.</InfoText>
        </BasicInfo>
        <AccountInfo>
          <Title>Account Information</Title>
          <InfoText>Change your username, password, or email address.</InfoText>
        </AccountInfo>
      </Left>
      <Right>
        <UsageInfo>
          <Title>Usage Information</Title>
          <InfoText>See your account usage statistics here.</InfoText>
        </UsageInfo>
      </Right>
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
`;

const Title = styled.h2`
  color: #fff;
  text-align: left;
`;

const InfoText = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-top: 10px;
`;

const BasicInfo = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  height: 30vh;
  padding: 20px;
  margin-bottom: 20px;
  background-color: rgba(59, 130, 246, 0.2);
`;

const AccountInfo = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  height: 30vh;
  padding: 20px;
  background-color: rgba(59, 130, 246, 0.2);
`;

const Left = styled.div`
  flex: 40%;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  flex: 60%;
`;

const UsageInfo = styled.div`
  border: 1px solid grey;
  height: 40vh;
  border-radius: 20px;
  padding: 20px;
  background-color: rgba(59, 130, 246, 0.2);
`;

export default Settings;
