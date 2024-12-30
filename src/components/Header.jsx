import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/mylogo.png";

import "../styles/Header.css";

function Header() {
  const [showPointer, setShowPointer] = React.useState(false);
  const [animateClass, setAnimateClass] = React.useState("");

  const handleMouseEnter = () => {
    setShowPointer(true);
    setAnimateClass("slide-in");
  };

  const handleMouseLeave = () => {
    setShowPointer(false);
    setAnimateClass("slide-out");
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
        <Link className="link-item" to="/about">
          About Us
        </Link>
        <Link className="link-item" to="/portfolio">
          Features
        </Link>
        <Link className="link-item" to="/services">
          Services
        </Link>
        <Link className="link-item" to="/contact">
          Contact
        </Link>
      </nav>
      <div className="right-elements">
        <div className="right">
          <FontAwesomeIcon className="icon" icon={faCartShopping} />
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <button
            className="btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              height: "60px",
              width: "140px",
              border: "none",
              borderRadius: "4px",
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
