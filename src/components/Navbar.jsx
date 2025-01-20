import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookOpen,
  faComputer,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { ArrowDropDown } from "@mui/icons-material";
import styled from "styled-components";
import logo from "../assets/images/mylogonew.webp";

const DROPDOWN_TYPES = {
  SERVICES: "services",
  DOCS: "docs",
};

const DROPDOWN_ITEMS = {
  [DROPDOWN_TYPES.SERVICES]: [
    {
      to: "/service1",
      icon: faRobot,
      label: "AI-based Solutions & Consultancy",
    },
    {
      to: "/service2",
      icon: faComputer,
      label: "Professional Web Development",
    },
  ],
  [DROPDOWN_TYPES.DOCS]: [
    { to: "/docs1", icon: faBook, label: "Getting Started Guide" },
    { to: "/docs2", icon: faBookOpen, label: "API Reference" },
  ],
};

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const headerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleDropdownEnter = (dropdownType) => {
    setActiveDropdown(dropdownType);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const renderDropdownItems = (dropdownType) => {
    return DROPDOWN_ITEMS[dropdownType].map(({ to, icon, label }) => (
      <DropdownItem key={to} to={to} onClick={() => setActiveDropdown(null)}>
        <FontAwesomeIcon icon={icon} /> {label}
      </DropdownItem>
    ));
  };

  const renderButton = () => {
    switch (location.pathname) {
      case "/home":
      case "/pricing":
        return (
          <GradientButton onClick={() => navigate("/signup")}>
            Get Started
          </GradientButton>
        );
      case "/settings":
        return (
          <DashButton onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </DashButton>
        );
      case "/help-center":
        return (
          <DashButton onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </DashButton>
        );
      case "/stats":
        return (
          <DashButton onClick={() => navigate("/settings")}>
            Back to Settings
          </DashButton>
        );
      default:
        return null;
    }
  };

  return (
    <HeaderContainer ref={headerRef}>
      <HamburgerMenu
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <Line $isOpen={isMobileMenuOpen} />
        <Line $isOpen={isMobileMenuOpen} />
        <Line $isOpen={isMobileMenuOpen} />
      </HamburgerMenu>

      <LogoContainer>
        <Link to="/home">
          <Logo src={logo} alt="Company logo" />
        </Link>
      </LogoContainer>

      <NavItems $open={isMobileMenuOpen} role="navigation">
        {Object.values(DROPDOWN_TYPES).map((dropdownType) => (
          <DropdownContainer
            key={dropdownType}
            onMouseEnter={() => handleDropdownEnter(dropdownType)}
            onMouseLeave={handleDropdownLeave}
            aria-expanded={activeDropdown === dropdownType}
          >
            <LinkItem as="div" role="button" tabIndex={0}>
              {dropdownType.charAt(0).toUpperCase() + dropdownType.slice(1)}
              <ArrowDropDown />
            </LinkItem>
            {activeDropdown === dropdownType && (
              <DropdownMenu>{renderDropdownItems(dropdownType)}</DropdownMenu>
            )}
          </DropdownContainer>
        ))}

        <DropdownContainer>
          <LinkItem to="/pricing">Pricing</LinkItem>
        </DropdownContainer>
      </NavItems>

      <RightElements>{renderButton()}</RightElements>
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
  font-family: "Plus Jakarta Sans", sans-serif;

  @media (max-width: 768px) {
    height: 10vh;
    padding: 0 10px;
    backdrop-filter: none;
    background: #05051e;
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
    opacity: ${({ $open }) => ($open ? "1" : "0")};
    transition: all 0.3s ease-in-out;
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    padding: 30px;
    padding-bottom: 70px;
    justify-content: flex-start;
    margin-left: -10px;

    > div {
      width: 100%;
      opacity: ${({ $open }) => ($open ? "1" : "0")};
      transition: all 0.3s ease-in-out;
      transition-delay: ${({ $open }) => ($open ? "0.2s" : "0")};
    }
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  min-width: 200px;
  z-index: 1000;
  padding: 8px 0;

  @media (max-width: 768px) {
    position: relative;
    box-shadow: none;
    background-color: transparent;
    padding: 0;
    margin-left: 20px;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  width: auto;
  margin: 0 15px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }

  &:focus-within ${DropdownMenu} {
    display: block;
  }
`;

const LinkItem = styled(Link)`
  color: white;
  font-weight: 600;
  font-size: 17px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 4px;

  &:hover {
    color: #43a5fe;
    transition: 0.4s ease;
  }

  &:focus {
    outline: 2px solid #43a5fe;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 10px;
  }
`;

const DropdownItem = styled(Link)`
  color: rgb(0, 36, 69);
  text-decoration: none;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(67, 165, 254, 0.1);
    color: #43a5fe;
  }

  @media (max-width: 768px) {
    color: white;
    padding: 10px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
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

const HamburgerMenu = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;

  @media (max-width: 768px) {
    display: block;
    flex: 1;
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
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }
`;

const DashButton = styled.button`
  background: none;
  color: #0b6fcb;
  border: none;
  font-size: medium;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 4px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export default Navbar;
