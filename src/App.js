import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Newpage from "./pages/Upload";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Newpage />} />
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
