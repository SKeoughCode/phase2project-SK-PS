import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [consoleArray, setConsoleArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/consoles")
      .then((resp) => resp.json())
      .then((data) => {
        setConsoleArray(data)
      })
  }, [])

  console.log(consoleArray)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
