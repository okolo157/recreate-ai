import React from "react";
import styled from "styled-components";
import bg from "../assets/images/sectionbg-1.png";

function ErrorPage() {
  return (
    <Container>
      <TextELements>
        <Text>404 error, page not found</Text>
        <Text2>
          This location does not appear to exist on our servers, please check
          the url and try again.
        </Text2>
      </TextELements>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed; 
`;

const TextELements = styled.div`
  margin-top: -200px;
`;

const Text = styled.h1`
  color: white;
  font-family: inherit;
  font-size: 40px;
`;

const Text2 = styled.p`
  color: white;
  font-family: inherit;
  font-size: 13px;
  font-weight: bold;
`;

export default ErrorPage;
