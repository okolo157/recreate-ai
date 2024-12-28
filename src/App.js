import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Features from "./pages/Features";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main className="main">
        <Home />
        <div className="feaures-stars">
          <Features />
        </div>
      </main>
    </div>
  );
}

export default App;
