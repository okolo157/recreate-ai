import React from "react";
import UploadContainer from "../components/UploadContainer";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";

import "../styles/Home.css";
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
