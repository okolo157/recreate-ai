import React from "react";
import { Email, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-copyright">
        © 2024 recreate.ai All Rights Reserved
      </div>
      <div className="footer-nav">
        <Link className="icon-item" to="/home">
          Home
        </Link>
        <Link className="icon-item" to="/about">
          About
        </Link>
        <Link className="icon-item" to="/features">
          Features
        </Link>
        <Link className="icon-item" to="/services">
          Services
        </Link>
      </div>
      <div className="footer-icons">
        <GitHub className="highcon" />
        <Instagram className="highcon" />
        <Twitter className="highcon" />
        <Email className="highcon" />
      </div>
    </div>
  );
}

export default Footer;
