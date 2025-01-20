import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import bg from "../assets/images/background-5-transformed.webp";
function SignUp() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const Navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checked) {
      toast.info("Please accept terms and conditions");
      return;
    }

    if (email === "") {
      toast.info("Please enter your email address");
      return;
    }

    // Validate email format regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.info("Please enter a valid email address");
      return;
    }

    if (email.includes("gmail.com")) {
      toast.info("Please use Sign Up with Google for Gmail accounts");
      return;
    }

    // Sanitize email input for local storage
    const sanitizedEmail = email.replace(/[^\w@.-]/g, "");

    localStorage.setItem("email", sanitizedEmail);
    Navigate("/password", { state: { isSignUp: true } });
  };

  return (
    <Container>
      <Card>
        <Header>
          <Title>Sign up for free</Title>
          <SubTitle>No credit card required</SubTitle>
        </Header>

        <Content>
          <ButtonGroup>
            <GradientButton>Sign Up with Google</GradientButton>
            <GradientButton>Sign up with Github</GradientButton>
          </ButtonGroup>

          <Divider>
            <DividerText>Or Sign up using your email</DividerText>
          </Divider>

          <StyledInput
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
          />

          <GradientButton onClick={handleSubmit} fullWidth>
            Continue
          </GradientButton>

          <CheckboxContainer>
            <StyledCheckbox
              type="checkbox"
              id="terms"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <CheckboxLabel htmlFor="terms">
              I agree to <TermsLink>Terms and Conditions</TermsLink>
            </CheckboxLabel>
          </CheckboxContainer>

          <SignInText>
            Already have an account?
            <StyledLink to="/signin"> Sign in</StyledLink>
          </SignInText>
        </Content>
      </Card>
      <ToastContainer position="bottom-right" pauseOnHover newestOnTop />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  // background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  background-image: url(${bg});
  background-attachment: fixed;
  font-family: "Plus Jakarta Sans", sans-serif;
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

const SubTitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0.5rem 0 0;
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

const StyledCheckbox = styled.input`
  accent-color: #2563eb;
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

export default SignUp;
