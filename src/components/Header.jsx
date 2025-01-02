import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookOpen,
  faCaretRight,
  faComputer,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { ArrowDropDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import logo from "../assets/images/mylogo.png";

const HeaderContainer = styled.header`
  display: flex;
  height: 15vh;
  align-items: center;
  border-bottom: solid 1px rgb(39, 39, 39);
  backdrop-filter: blur(10px);
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  flex: 2;
`;

const Logo = styled.img`
  width: 200px;
  cursor: pointer;
`;

const NavItems = styled.nav`
  flex: 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 20px 20px;
`;

const LinkItem = styled(Link)`
  color: white;
  font-weight: 600;
  font-size: 17px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  &:hover {
    color: #43a5fe;
    transition: 0.4s ease;
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
  color:rgb(0, 36, 69);

  &:hover {
    color: #43a5fe;
  }
`;

const RightElements = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
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
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
`;

const IconPointer = styled(FontAwesomeIcon)`
  margin-left: 10px;
  opacity: ${({ show }) => (show ? "1" : "0")};
  animation: ${({ animate }) => (animate === "slide-in" ? slideIn : slideOut)}
    0.3s forwards;
`;

function Header() {
  const [showPointer, setShowPointer] = React.useState(false);
  const [animateClass, setAnimateClass] = React.useState("");
  const [showDocsDropdown, setShowDocsDropdown] = React.useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = React.useState(false);

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/home">
          <Logo src={logo} alt="logo" />
        </Link>
      </LogoContainer>
      <NavItems>
        <LinkItem to="/home">Home</LinkItem>
        <div
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => setShowServicesDropdown(false)}
          style={{ position: "relative" }}
        >
          <LinkItem>
            Services <ArrowDropDown />
          </LinkItem>
          {showServicesDropdown && (
            <DropdownMenu width="270px">
              <DropdownItem to="/service1">
                <FontAwesomeIcon icon={faRobot} /> AI based Solutions &
                Consultancy
              </DropdownItem>
              <DropdownItem to="/service2">
                <FontAwesomeIcon icon={faComputer} /> Professional Web
                Development
              </DropdownItem>
            </DropdownMenu>
          )}
        </div>
        <div
          onMouseEnter={() => setShowDocsDropdown(true)}
          onMouseLeave={() => setShowDocsDropdown(false)}
          style={{ position: "relative" }}
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
        </div>
        <LinkItem to="/faqs">FAQs</LinkItem>
        <LinkItem to="/pricing">Pricing</LinkItem>
      </NavItems>
      <RightElements>
        <GradientButton
          onMouseEnter={() => {
            setShowPointer(true);
            setAnimateClass("slide-in");
          }}
          onMouseLeave={() => {
            setShowPointer(false);
            setAnimateClass("slide-out");
          }}
          onClick={() => navigate("/signup")}
        >
          Get Started
          {showPointer && (
            <IconPointer icon={faCaretRight} animate={animateClass} />
          )}
        </GradientButton>
      </RightElements>
    </HeaderContainer>
  );
}

export default Header;
