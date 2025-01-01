import React from "react";
import "../styles/Steps.css";

function Steps() {
  const features = [
    {
      img: "https://teleporthq.io/design-to-code-import-400w.png",
      alt: "first-step",
      heading: "Import",
      description:
        "Discover a seamless designer to developer handoff with Recreate.",
    },
    {
      img: "https://teleporthq.io/design-to-code-customize-400w.png",
      alt: "second-step",
      heading: "Customize",
      description:
        "Build and customize projects with the drag-and-drop editor.",
    },
    {
      img: "https://teleporthq.io/design-to-code-export-400w.png",
      alt: "third-step",
      heading: "Export",
      description:
        "Turn your work into HTML, CSS, and 5 different JS frameworks.",
    },
  ];

  return (
    <div className="all">
      <h2 style={{ color: "white", fontSize: "40px" }}>
        From design to <code>{"<code>"}</code> in 3 easy steps ⤵
      </h2>
    
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="img-container">
              <img
                src={feature.img}
                width="100%"
                height="100%"
                alt={feature.alt}
              />
            </div>
            <h3>{feature.heading}</h3>
            <p style={{ all: "unset", fontSize: "20px", color: "white" }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
