import React from "react";
import "../styles/Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faCheckDouble,
  faGears,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

function Features() {
  const features = [
    {
      heading: "Accurate Detection",
      description:
        "Our tool provides precise and accurate detection of UI componens to provide reusable code.",
      icon: faCheckDouble,
    },
    {
      heading: "Optimized Code",
      description:
        "With specialized AI machine learning algorithms, we can ensure we provide optimized code that works.",
      icon: faGears,
    },
    {
      heading: "Multi-framework support",
      description:
        "Our tool provides code for multiple frameworks like React, Angular, Vue, etc.",
      icon: faBoxesStacked,
    },
    {
      heading: "Interactivity support",
      description:
        "Our seamless GUI provides an interactive experience to our users, with limitless customization.",
      icon: faPeopleArrows,
    },
  ];

  return (
    <div className="all">
      <h2 style={{ color: "white", fontSize: "40px" }}>Why Choose Us?</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <FontAwesomeIcon
              icon={feature.icon}
              size="3x" 
              style={{ marginBottom: "30px" }}
              color="white"
             />
            <h3>{feature.heading}</h3>
            <p className="p">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
