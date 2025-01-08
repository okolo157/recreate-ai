import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


function Resetpwd() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    toast.info("Login code sent to your email address");
    // Todo: rest of email logic
  };

  return (
    <Container>
      <Card>
        <Header>
          <Title>Reset your Password</Title>
        </Header>

        <Content>
          <Divider />
          <InputGroup>
            <StyledInput
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
          </InputGroup>

          {error && <ErrorText>{error}</ErrorText>}

          <GradientButton fullWidth onClick={handleSubmit}>
            Reset Password
          </GradientButton>
          <ForgotPwd>
            Return to <StyledLink to="/signin">Sign in</StyledLink>
          </ForgotPwd>
        </Content>
      </Card>
      <ToastContainer position="bottom-right" pauseOnHover newestOnTop />
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

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  color: white;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const StyledLink = styled(Link)`
  color: #93c5fd;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
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

const ForgotPwd = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  margin: 0;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  text-align: center;
`;

export default Resetpwd;
