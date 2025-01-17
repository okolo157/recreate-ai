import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookOpen,
  faComputer,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { ArrowDropDown } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/mylogo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = React.useState(false);
  const [showDocsDropdown, setShowDocsDropdown] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const locator = location.pathname;

  return (
    <HeaderContainer>
      <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Line $isOpen={isMenuOpen} />
        <Line $isOpen={isMenuOpen} />
        <Line $isOpen={isMenuOpen} />
      </HamburgerMenu>
      <LogoContainer>
        <Link to="/home">
          <Logo src={logo} alt="logo" />
        </Link>
      </LogoContainer>
      <NavItems open={isMenuOpen}>
        <DropdownContainer
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => setShowServicesDropdown(false)}
        >
          <LinkItem>
            Services <ArrowDropDown />
          </LinkItem>
          {showServicesDropdown && (
            <DropdownMenu width="270px">
              <DropdownItem to="/service1">
                <FontAwesomeIcon icon={faRobot} /> AI-based Solutions &
                Consultancy
              </DropdownItem>
              <DropdownItem to="/service2">
                <FontAwesomeIcon icon={faComputer} /> Professional Web
                Development
              </DropdownItem>
            </DropdownMenu>
          )}
        </DropdownContainer>
        <DropdownContainer
          onMouseEnter={() => setShowDocsDropdown(true)}
          onMouseLeave={() => setShowDocsDropdown(false)}
        >
          <LinkItem>
            Docs <ArrowDropDown />
          </LinkItem>
          {showDocsDropdown && (
            <DropdownMenu>
              <DropdownItem to="/docs1">
                <FontAwesomeIcon icon={faBook} /> Getting Started Guide
              </DropdownItem>
              <DropdownItem to="/docs2">
                <FontAwesomeIcon icon={faBookOpen} /> API Reference
              </DropdownItem>
            </DropdownMenu>
          )}
        </DropdownContainer>
        <DropdownContainer>
          <LinkItem to="/pricing">Pricing</LinkItem>
        </DropdownContainer>
      </NavItems>
      <RightElements>
        {(locator === "/home" || locator === "/pricing") && (
          <GradientButton
            onClick={() => {
              navigate("/signup");
            }}
          >
            Get Started
          </GradientButton>
        )}
        {(locator === "/settings" || locator === "/help-center") && (
          <DashButton
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            {locator === "/settings" ? (
              <p>Go to Dashboard</p>
            ) : locator === "/help-center" ? (
              <p>Back to Dashboard</p>
            ) : (
              ""
            )}
          </DashButton>
        )}
        {locator === "/stats" && (
          <DashButton
            onClick={() => {
              navigate("/settings");
            }}
          >
            Back to Settings
          </DashButton>
        )}
      </RightElements>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 15vh;
  backdrop-filter: blur(10px);
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 1000;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 10vh;
    padding: 0 10px;
  }
`;

const LogoContainer = styled.div`
  flex: 2;

  @media (max-width: 768px) {
    flex: 1;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    flex: 0.5;  
  }
`;

const Logo = styled.img`
  width: 200px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const NavItems = styled.nav`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 10vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    z-index: 999;
    overflow: hidden;
    opacity: ${({ open }) => (open ? "1" : "0")};
    transition: all 0.3s ease-in-out;
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    padding: 30px;
    padding-bottom: 70px;
    justify-content: flex-start;
    margin-left: ${({open}) => (open ? "-10px": "-10px")};

    > div {
      width: 100%;
      opacity: ${({ open }) => (open ? "1" : "0")};
      transition: all 0.3s ease-in-out;
      transition-delay: ${({ open }) => (open ? "0.2s" : "0")};
    }
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
  transition: all 0.3s ease-in-out;

  &:nth-child(1) {
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0)"};
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
  }

  &:nth-child(3) {
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0)"};
  }
`;

const LinkItem = styled(Link)`
  color: white;
  font-weight: 600;
  font-size: 17px;
  text-decoration: none;
  display: flex;
  justify-content: center;

  &:hover {
    color: #43a5fe;
    transition: 0.4s ease;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 10px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 10px;
  border-radius: 4px;
  width: ${({ width }) => width || "200px"};
  display: flex;
  flex-direction: column;
`;

const DropdownItem = styled(Link)`
  margin: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: rgb(0, 36, 69);

  &:hover {
    color: #43a5fe;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    flex: 1;
    padding-left: 10px;
  }
`;

const RightElements = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const GradientButton = styled.button`
  height: 60px;
  width: 140px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }
`;

const DashButton = styled.button`
  background: none;
  color: #0b6fcb;
  border: none font-size: medium;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.2s ease;
  }
`;

export default Header;
