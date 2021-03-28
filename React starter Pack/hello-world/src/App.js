import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const name = "Rakshit";
  const isLoggedIn = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!isLoggedIn && <p>hello world</p>}
        {isLoggedIn && <p>hello {name}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
