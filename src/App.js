import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import ErrorPage from "./components/ErrorPage.jsx";
import Dashboard from "./pages/Dashboard.js";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import Password from "./components/Password.jsx";
import Resetpwd from "./components/Resetpwd.jsx";
function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {location.pathname !== "/upload" &&
          location.pathname !== "/dashboard" && (
            <HeaderWrapper>
              <Header />
            </HeaderWrapper>
          )}
        <MainContent location={location}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/password" element={<Password />} />
            <Route path="/resetpwd" element={<Resetpwd />} />
          </Routes>
        </MainContent>
        {location.pathname !== "/upload" &&
          location.pathname !== "/dashboard" && (
            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          )}
      </AppContainer>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");
`;

const AppContainer = styled.div`
  text-align: center;
  background-color: #05051e;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainContent = styled.main`
  margin-top: ${({ location }) =>
    location.pathname === "/dashboard" ? "0" : "110px"};
`;

const HeaderWrapper = styled.header``;

const FooterWrapper = styled.footer`
`;

export default App;
