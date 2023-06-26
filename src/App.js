import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
