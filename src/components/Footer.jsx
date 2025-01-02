import React from "react";
import styled from "styled-components";
import { Email, GitHub, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import bg from '../assets/images/background-5.png'

const FooterContainer = styled.div`
  color: white;
  text-align: center;
  padding: 10px;
  left: 0;
  bottom: 0;
  height: 14vh;
  margin-top: 100px;
  display: flex;
  border: 1px inset #424286;
  align-items: center;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
`;

const FooterCopyright = styled.div`
  flex: 25%;
`;

const FooterNav = styled.div`
  flex: 20%;
  font-size: 14px;
  color: white;
  text-decoration: underline;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: rgb(61, 190, 255);
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
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterCopyright>© 2024 recreate.ai All Rights Reserved</FooterCopyright>
      <FooterNav>
        <Link to="/home">Home</Link>
        <Link to="/about">Services</Link>
        <Link to="/features">Docs</Link>
        <Link to="/services">Pricing</Link>
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

export default Footer;
