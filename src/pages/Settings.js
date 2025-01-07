import React, { useState } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

function Settings() {
  const [showDelete, setShowDelete] = useState(false);

  const handleAdvanced = () => {
    if (showDelete === false) {
      setShowDelete(true);
    } else {
      setShowDelete(false);
    }
  };

  return (
    <Container>
      <Left>
        <BasicInfo>
          <Title>Basic Information</Title>
          <InfoText>
            <b>Name: </b>
            <p>Victor Okolo</p>
          </InfoText>
          <InfoText>
            <b>Email: </b>Okolodubem9@gmail.com
          </InfoText>
        </BasicInfo>
        <AccountInfo>
          <Top>
            <Title>Account</Title>
            <Plan>Pro Trial 14 days remaining</Plan>
          </Top>
            <PlanButtons>
              <FirstButton>UPGRADE TO PRO</FirstButton>
              <SecondButton>UPGRADE TO BUSINESS</SecondButton>
            </PlanButtons>
            <Advanced onClick={handleAdvanced}>
              Advanced <FontAwesomeIcon icon={showDelete ? faCaretUp : faCaretDown} />
            </Advanced>
            {showDelete && <Modal>Delete Account</Modal>}
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
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BasicInfo = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  height: 30vh;
  padding: 20px;
  margin-bottom: 20px;
  background-color:#0d132a;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
`;

const AccountInfo = styled.div`
  border: 1px solid grey;
  border-radius: 20px;
  height: 30vh;
  padding: 20px;
  background-color:#0D132A
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
  background-color: #0d132a;
`;

const Plan = styled.button`
  margin-left: 10px;
`;

const PlanButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: left;
`;

const FirstButton = styled.button`
  width: 40%;
  height: 40px;
  cursor: pointer;
`;

const SecondButton = styled.button`
  width: 40%;
  height: 40px;
  cursor: pointer;
`;

const Advanced = styled.p`
  color: white;
  cursor: pointer;
  margin-left: 20px;
`;

const Modal = styled.p`
  color: white;
  margin: 0px;
  margin-top: -14px;
  text-decoration: underline;
  color: grey;
  margin-left: 20px;
`;



export default Settings;
