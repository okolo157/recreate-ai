import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");

  const Navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (email.includes("gmail.com")) {
      alert("Please use Sign In with Google for Gmail accounts");
      return;
    }
    Navigate("/password", { state: { isSignUp: false } });
  };

  return (
    <Container>
      <Card>
        <Header>
          <Title>Sign in</Title>
        </Header>

        <Content>
          <ButtonGroup>
            <GradientButton>Sign in with Google</GradientButton>
            <GradientButton>Sign in with Github</GradientButton>
          </ButtonGroup>

          <Divider>
            <DividerText>or Sign in using your email</DividerText>
          </Divider>

          <StyledInput
            onChange={handleEmailChange}
            value={email}
            type="email"
            placeholder="Enter your email address"
          />

          <GradientButton onClick={handleSubmit} fullWidth>
            Continue
          </GradientButton>

          <CheckboxContainer>
            <CheckboxLabel>
              By pressing Continue, you agree to our{" "}
              <TermsLink>Terms and Conditions</TermsLink>
            </CheckboxLabel>
          </CheckboxContainer>

          <SignInText>
            You don't have an account?{" "}
            <StyledLink to="/signup"> Sign up</StyledLink>
          </SignInText>
        </Content>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
`;

const Card = styled.div`
  width: 100%;
  max-width: 28rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  overflow: hidden;
`;

const Header = styled.div`
  text-align: center;
  padding: 2rem 2rem 1rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 1.875rem;
  font-weight: bold;
  margin: 0;
`;

const Content = styled.div`
  padding: 1.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GradientButton = styled.button`
  background: linear-gradient(to right, #2563eb, #60a5fa);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.75rem;
  font-weight: 500;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const Divider = styled.div`
  position: relative;
  text-align: center;
  margin: 1rem 0;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const DividerText = styled.span`
  color: rgba(255, 255, 255, 0.8);
  background: transparent;
  padding: 0 0.75rem;
  position: relative;
  font-size: 0.875rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  color: white;
  align-self: center;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CheckboxLabel = styled.label`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
`;

const TermsLink = styled.span`
  color: #93c5fd;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SignInText = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: #93c5fd;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default SignIn;
