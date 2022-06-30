import logo from "./logo.svg";
import "./App.css";
import Facebook from "./components/facebook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>facebook example</p>
        <p>Authenticate with facebook</p>
        <Facebook />
      </header>
    </div>
  );
}

export default App;
