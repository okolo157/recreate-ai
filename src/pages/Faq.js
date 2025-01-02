import React from "react";
import styled from "styled-components";

function Faq() {
  const Button = styled.button`
    background: red;
  `;

  return (
    <div className="faq-container">
      <Button> Click me </Button>
    </div>
  );
}

export default Faq;
