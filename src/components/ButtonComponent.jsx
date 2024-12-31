import React from "react";
import Button from "@mui/material/Button";
import CloudUpload from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material";

function ButtonComponent({ onFileChange, handleNavigate, Text, disclaimer }) {
  const handlePrompt = () => {
    const url = prompt("Please enter the image URL");
    if (url === null || url === "") {
      alert("Please enter the url");
    } else {
      localStorage.setItem("url", url);
    }
  };

  const StyledButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "24px",
    fontSize: "20px",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  }));

  return (
    <div>
      <input
        accept="image/*"
        id="contained-button-file"
        onChange={onFileChange}
        type="file"
        style={{ display: "none" }}
      />
      <label htmlFor="contained-button-file">
        <StyledButton
          size="large"
          endIcon={<CloudUpload />}
          variant="contained"
          component="span"
          onClick={handleNavigate}
        >
          {Text}
        </StyledButton>
      </label>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
        {/* <div style={{ marginTop: "10px", color: "grey" }}>
          <em>{disclaimer}</em>
        </div> */}
      </div>
    </div>
  );
}

export default ButtonComponent;
