import React from "react";
import "../styles/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <svg
        className="footer-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient
            id="footer-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#005db3", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#062d52", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          className="footer-wave-path"
          d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,117.3C672,96,768,96,864,122.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="footer-content">
        <div className="textIcons">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Recreate App. All rights reserved.
          </div>
          <div className="brand-icons">
            <GitHubIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
          </div>
        </div>
        <div className="right-footer-nav">
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/features">Features</Link>
            <Link to="/services">Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
