import React from "react";
import { useLocation } from "react-router-dom";

function NewPage() {
  const location = useLocation();
  const { image } = location.state || {};

  return (
    <div>
      <h1>New Page</h1>
      {image && <img src={image} alt="Selected" />}
    </div>
  );
}

export default NewPage;
