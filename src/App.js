import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <Home />
      </main>
    </div>
  );
}

export default App;
