import React from "react";
import "../styles/Home.css";

function Home() {

  const handlePrompt = () => {
    const url = prompt("Please enter the image URL");
    if (url == null || url === "") {
      alert("Please enter the url");
      prompt("Please enter the image URL");
    } else {
      localStorage.setItem("url", url);
    }
  };

  return (
    <div className="main-content">
      <p>Recreate AI Code Generator</p>
      <h1
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "65px",
          fontWeight: "800",
        }}
      >
        Generate clean, reusable UI code <br />
        <div className="h1-1">from screenshots/mockups</div>
      </h1>
      <div className="upload-container">
        <button> Upload Image </button>
        <p>
          or drop a file, <br />
          input image{" "}
          <span
            style={{
              color: "grey",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={handlePrompt}
          >
            url
          </span>
        </p>
      </div>
    </div>
  );
}

export default Home;
