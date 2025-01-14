import React from "react";
import Header from "../components/Header";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";
import Steps from "../components/Steps";
import Teams from "../components/Teams";
import Pricing from "../components/PricingComponent";
import FAQs from "../components/FAQs";

function Home() {
  return (
    <>
      <Header />
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
