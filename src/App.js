import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Countries from "./components/Countries/Countries";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      {/* <Counter></Counter> */}
    </div>
  );
}



export default App;
