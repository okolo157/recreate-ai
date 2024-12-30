import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Newpage from "./pages/Upload";
import Footer from "./components/Footer";


import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Upload" element={<Newpage />} />
        </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
