import React from "react";
import styled from "styled-components";

function ErrorPage() {
  

  return (
    <Container>
      <Text>404 error, page not found</Text>
      <Text2>
        This location does not appear to exist on our servers, please check the
        url and try again.
      </Text2>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  color: white;
  font-family: inherit;
  font-size: 40px;
`;

const Text2 = styled.p`
  color: white;
  font-family: inherit;
  font-size: 13px;
`;


export default ErrorPage;
