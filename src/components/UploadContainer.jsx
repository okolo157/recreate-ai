import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Button from "@mui/material/Button";

function UploadContainer() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const navigate = useNavigate();

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log(selectedFile)

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem("image", base64String);
        navigate("/upload", { state: { image: base64String } });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrompt = () => {
    const url = prompt("Please enter the image URL");
    if (url === null || url === "") {
      alert("Please enter the url");
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
        <input
          accept="image/*"
          id="contained-button-file"
          onChange={onFileChange}
          type="file"
          style={{ display: "none" }}
        />
        <label htmlFor="contained-button-file">
          <Button className="button" variant="contained" component="span">
            Upload Image
          </Button>
        </label>
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

export default UploadContainer;
