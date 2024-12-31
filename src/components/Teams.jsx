import React from "react";
import "../styles/Teams.css";
import { DesignServices, DeveloperMode, Message } from "@mui/icons-material";

function Teams() {
  const features = [
    {
      icon: <DesignServices />,
      heading: "Designers",
      description:
        "Create responsive prototypes using Figma. With the Figma plugin, they can export their projects to Recreate.",
    },
    {
      icon: <DeveloperMode />,
      heading: "Developers",
      description:
        "Speed up the process and build on existing designs to create functional apps or websites that can be exported to code.",
    },
    {
      icon: <Message />,
      heading: "Product & Marketing",
      description:
        "Can take control over their future website by previewing, testing, and making all the necessary changes on the fly",
    },
  ];

  return (
    <div className="all-teams">
      <h2 style={{ color: "white", fontSize: "40px" }}>
        Connect the dots between teams
      </h2>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Build communication without friction across teams and keep everyone in
        the loop whether they’re working in an office or remotely. <br />{" "}
        Deliver better outcomes faster with a design to CSS tool that makes the
        collaboration process easy.
      </p>
      <div className="features-teams">
        {features.map((feature, index) => (
          <div className="feature-team" key={index}>
            {feature.icon}
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

export default Teams;
