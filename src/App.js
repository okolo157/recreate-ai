import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Footer from "./components/Footer";

import "./App.css";

import SignUpSide from "./Sign-up-side/SignUpSide";
import SignIn from "./sign-in/SignIn";
import Faq from "./pages/Faq";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main className="safearea">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/signup" element={<SignUpSide />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/frequently-asked-questions" element={<Faq />} />
        </Routes>
      </main>
      {location.pathname !== "/upload" && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default App;
