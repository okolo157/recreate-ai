import React from "react";
import styled from "styled-components";
import { Email, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import bg from "../assets/images/background-5.png";

function Footer() {
  return (
    <FooterContainer>
      <FooterCopyright>© 2024 recreate.ai All Rights Reserved</FooterCopyright>
      <FooterNav>
        <Link to="/home">Home</Link>
        <Link to="/about">Services</Link>
        <Link to="/features">Docs</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/terms">Terms of Service</Link>
        <Link to="/help-center">Help</Link>
      </FooterNav>
      <FooterIcons>
        <GitHub />
        <Instagram />
        <Twitter />
        <Email />
      </FooterIcons>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  color: white;
  text-align: center;
  padding: 10px;
  left: 0;
  bottom: 0;
  height: 10vh;
  // margin-top: 100px;
  display: flex;
  border: 1px inset #424286;
  align-items: center;
  // background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  font-family: "Plus Jakarta Sans", sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

const FooterCopyright = styled.div`
  flex: 25%;
  font-size: 13px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const FooterNav = styled.div`
  flex: 20%;
  font-size: 12px;
  color: white;
  text-decoration: none;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  color: white;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: rgb(61, 190, 255);
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 10px 0;

    a {
      padding-right: 10px;
    }
  }
`;

const FooterIcons = styled.div`
  flex: 25%;

  svg {
    padding-right: 10px;
    cursor: pointer;

    &:hover {
      color: #0b6fcb;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export default Footer;
