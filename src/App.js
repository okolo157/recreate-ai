import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Footer from "./components/Footer";
import SignUpSide from "./Sign-up-side/SignUpSide";
import SignIn from "./sign-in/SignIn";
import styled, { createGlobalStyle } from "styled-components";
import Pricing from "./pages/Pricing";
import ErrorPage from "./components/ErrorPage.jsx";
import Dashboard from "./pages/Dashboard.js";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {location.pathname !== "/upload" && (
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
        )}
        <MainContent>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/signup" element={<SignUpSide />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </MainContent>
        {location.pathname !== "/upload" && (
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
  margin-top: 110px;
`;

const HeaderWrapper = styled.header``;

const FooterWrapper = styled.footer``;

// function Loader() {
//   useEffect({} => {},[] )
// }

export default App;
