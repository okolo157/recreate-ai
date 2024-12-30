import React from "react";
import "../styles/Home.css";
// import Button from "@mui/material/Button";
import UploadContainer from "../components/UploadContainer";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";
function Home() {
  return (
    <>
      <UploadContainer />
      <Features />
      <AboutSection />
    </>
  );
}

export default Home;
