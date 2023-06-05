import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCollection from './components/ProductCollection';
import Header from './components/Header';

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
    <div>
      <Header />
      <ProductCollection consoleArray={consoleArray} />

    </div>
  );
}

export default App;
