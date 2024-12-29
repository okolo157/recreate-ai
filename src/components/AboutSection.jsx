import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../styles/AboutSection.css";
import bg from "../assets/images/ai-img.png";
function AboutSection() {
  return (
    <div className="section-container">
      <div className="left">
        <img className="image" src={bg} alt="left side" />
      </div>
      <div className="right-side">
        <p>What recreate can do</p>
        <h2
          style={{
            all: "unset",
            fontSize: "xxx-large",
            fontWeight: "700",
            textAlign: "left",
          }}
        >
          Code Quicker with Recreate.
        </h2>
        <h3 style={{ textAlign: "left" }}>
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
              style={{ marginRight: "14px", }}
            />
            <p>Quicker coding</p>
          </div>
          <div className="check-elements three">
            <FontAwesomeIcon
              icon={faCheck}
              color="white"
              style={{ marginRight: "14px"  }}
            />
            <p>Easy to use</p>
          </div>
        </div>
        <button className="about-btn">About us</button>
      </div>
    </div>
  );
}

export default AboutSection;
