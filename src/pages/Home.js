import React from "react";
import UploadContainer from "../components/UploadContainer";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";
import Steps from "../components/Steps";
import Teams from "../components/Teams";
import Pricing from "../components/PricingComponent";
import FAQs from "../components/FAQs";

function Home() {
  return (
    <>
      <UploadContainer />
      <Steps />
      <Pricing />
      <AboutSection />
      <Features />
      <Teams />
      <FAQs />
    </>
  );
}

export default Home;
