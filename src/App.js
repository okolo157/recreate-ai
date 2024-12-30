import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Newpage from "./pages/Newpage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/upload" element={<Newpage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
