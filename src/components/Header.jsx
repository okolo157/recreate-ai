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
import logo from "../assets/images/mylogo.png";

import "../styles/Header.css";

function Header() {
  const [showPointer, setShowPointer] = React.useState(false);
  const [animateClass, setAnimateClass] = React.useState("");
  const [showDocsDropdown, setShowDocsDropdown] = React.useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = React.useState(false);

  const handleServicesMouseEnter = () => setShowServicesDropdown(true);
  const handleServicesMouseLeave = () => setShowServicesDropdown(false);

  const handleDocsMouseEnter = () => setShowDocsDropdown(true);
  const handleDocsMouseLeave = () => setShowDocsDropdown(false);

  const handleMouseEnter = () => {
    setShowPointer(true);
    setAnimateClass("slide-in");
  };

  const handleMouseLeave = () => {
    setShowPointer(false);
    setAnimateClass("slide-out");
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signup");
  };

  return (
    <div className="App-header">
      <div className="logo-container">
        <Link to="/Home">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <nav className="nav-items">
        <Link className="link-item" to="/home">
          Home
        </Link>
        <div
          onMouseEnter={handleServicesMouseEnter}
          onMouseLeave={handleServicesMouseLeave}
          style={{ position: "relative" }}
        >
          <Link className="link-item">
            <div
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Services <ArrowDropDown />
            </div>
            {showServicesDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "white",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  zIndex: 1000,
                  padding: "10px",
                  borderRadius: "4px",
                  width: "270px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to="/service1" className="dropdown-item">
                  <FontAwesomeIcon className="dropdown-icon" icon={faRobot} />{" "}
                  AI based Solutions & Consultancy
                </Link>
                <Link to="/service2" className="dropdown-item">
                  <FontAwesomeIcon
                    className="dropdown-icon"
                    icon={faComputer}
                  />{" "}
                  Professional Web development
                </Link>
              </div>
            )}
          </Link>
        </div>
        <div
          onMouseEnter={handleDocsMouseEnter}
          onMouseLeave={handleDocsMouseLeave}
          style={{ position: "relative" }}
        >
          <Link className="link-item">
            <div
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Docs <ArrowDropDown />
            </div>
          </Link>
          {showDocsDropdown && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                zIndex: 1000,
                padding: "10px",
                borderRadius: "4px",
                width: "170px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/docs1" className="dropdown-item">
                <FontAwesomeIcon className="dropdown-icon" icon={faBook} />{" "}
                Getting Started Guide
              </Link>
              <Link to="/docs2" className="dropdown-item">
                <FontAwesomeIcon className="dropdown-icon" icon={faBookOpen} />{" "}
                API Reference
              </Link>
            </div>
          )}
        </div>
        <Link className="link-item">FAQs</Link>
        <Link className="link-item">Pricing</Link>
      </nav>
      <div className="right-elements">
        <div className="right">
          <button
            className="btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleNavigate}
            style={{
              height: "60px",
              width: "140px",
              border: "none",
              borderRadius: "30px",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Get Started{" "}
            {showPointer && (
              <FontAwesomeIcon
                className={`icon-pointer ${animateClass}`}
                icon={faCaretRight}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
