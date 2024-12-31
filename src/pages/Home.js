import React from "react";
import UploadContainer from "../components/UploadContainer";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";
import Steps from "../components/Steps";
import Teams from "../components/Teams";


import "../styles/Home.css";
function Home() {
  return (
    <>
      <UploadContainer />
      <Steps />
      <AboutSection />
      <Features />
      <Teams />
    </>
  );
}

export default Home;
