import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Features from "./components/Features";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main className="main">
        <Home />
        <div className="features-stars">
          <Features />
        </div>
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
