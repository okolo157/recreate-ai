import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import bg from "../assets/images/gen-ai.webp";

import "../styles/AboutSection.css";
import { Link } from "react-router-dom";
function AboutSection() {
  return (
    <div className="section-container">
      <div className="left">
        <img className="image" src={bg} height="700px" alt="left side" />
      </div>
      <div className="right-side">
        <p>What recreate can do</p>
        <h2
          style={{
            all: "unset",
            fontSize: "xxx-large",
            fontWeight: "700",
            textAlign: "left",
            marginBottom: "10px",
          }}
        >
          Code Quicker with Recreate.
        </h2>
        <h3 style={{ all: "unset", textAlign: "left", width: "80%" }}>
          Our AI systems can analyze data, to provide pixel perfect code for
          your UI element, from simple to even more complex elements.
        </h3>
        <div className="check-elements-container">
          <div className="check-elements one">
            <FontAwesomeIcon
              icon={faCheck}
              color="white"
              style={{ marginRight: "14px" }}
            />
            <p>Accurate Detection</p>
          </div>
          <div className="check-elements two">
            <FontAwesomeIcon
              icon={faCheck}
              color="white"
              style={{ marginRight: "14px" }}
            />
            <p>Quicker coding</p>
          </div>
          <div className="check-elements three">
            <FontAwesomeIcon
              icon={faCheck}
              color="white"
              style={{ marginRight: "14px" }}
            />
            <p>Easy to use</p>
          </div>
        </div>
          <Link to="/signup" className="about-btn">Get Started</Link>
      </div>
    </div>
  );
}

export default AboutSection;
