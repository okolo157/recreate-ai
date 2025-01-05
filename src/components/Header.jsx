import React, { useEffect, useState } from "react";
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
// import avatar from "../assets/images/unnamed.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = React.useState(false);
  const [showDocsDropdown, setShowDocsDropdown] = React.useState(false);
  // const [isSignedIn, setIsSignedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === "/dashboard") {
  //     setIsSignedIn(true);
  //   } else {
  //     setIsSignedIn(false);
  //   }
  // }, [location.pathname]);

  return (
    <HeaderContainer>
      <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Line />
        <Line />
        <Line />
      </HamburgerMenu>
      <LogoContainer>
        <Link to="/home">
          <Logo src={logo} alt="logo" />
        </Link>
      </LogoContainer>
      <NavItems open={isMenuOpen}>
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
                <FontAwesomeIcon icon={faRobot} /> AI-based Solutions &
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
        <LinkItem to="/pricing">Pricing</LinkItem>
      </NavItems>
      <RightElements>
        {location.pathname !== "/dashboard" && (
          <GradientButton
            onClick={() => {
              navigate("/signup");
            }}
          >
            Get Started
          </GradientButton>
        )}
        {/* {isSignedIn && (
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Avatar src={avatar} alt="User Avatar" />
            <p style={{ margin: 0, cursor: "pointer", color: "#fff", fontSize: "small" }}>
              Sign out
            </p>
          </div>
        )} */}
      </RightElements>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 15vh;
  border-bottom: solid 1px rgb(39, 39, 39);
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
`;

const Logo = styled.img`
  width: 200px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const NavItems = styled.nav`
  flex: 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 10vh;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px 0;
    z-index: 999;
  }
`;

const LinkItem = styled(Link)`
  color: white;
  font-weight: 600;
  font-size: 17px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

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

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
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
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export default Header;
