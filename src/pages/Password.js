import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import bg from "../assets/images/background-5-transformed.webp";

function PasswordScreen() {
  const location = useLocation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isSignUp = location.state?.isSignUp || false;

  const validatePassword = () => {
    const hasNumber = /\d/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const isLongEnough = password.length >= 8;
    return hasNumber && hasUppercase && hasSpecialChar && isLongEnough;
  };

  const isValid = validatePassword();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (isValid) {
      setError("");
      if (isSignUp) {
        navigate("/settings");
      } else {
        navigate("/dashboard");
      }
    } else {
      setError(
        "Password must be at least 8 characters, include a number, an uppercase letter, and a special character."
      );
    }
  };

  return (
    <Container>
      <Card>
        <Header>
          <Title>{isSignUp ? "Create a Password" : "Enter Password"}</Title>
        </Header>

        <Content>
          <Divider />
          <InputGroup>
            <StyledInput
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ToggleButton onClick={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </ToggleButton>
          </InputGroup>

          {isSignUp && (
            <InputGroup>
              <StyledInput
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <ToggleButton
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                />
              </ToggleButton>
            </InputGroup>
          )}

          {error && <ErrorText>{error}</ErrorText>}

          <GradientButton fullWidth onClick={handleSubmit}>
            {isSignUp ? "Continue" : "Sign in"}
          </GradientButton>
          {location.pathname !== "/signup" && !isSignUp && (
            <ForgotPwd>
              Forgot Password? Click{" "}
              <StyledLink to="/resetpwd">here</StyledLink> to reset it
            </ForgotPwd>
          )}
        </Content>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  margin-top: 20px;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
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

const ToggleButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: white;
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

const StyledLink = styled(Link)`
  color: #93c5fd;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  text-align: center;
`;

export default PasswordScreen;
