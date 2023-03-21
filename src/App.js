import logo from "./logo.svg";
import "./App.css";
import Countries from "./components/Countires/Countries";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}

export default App;
