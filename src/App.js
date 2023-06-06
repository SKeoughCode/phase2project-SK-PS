import React, { useState, useEffect } from 'react';
import './App.css';
import Consoles from './components/Consoles';
import NavBar from './components/NavBar';
import Header from './components/Header';
// import AccessoriesCollection from './components/AccessoriesCollection';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';



function App() {

  const [consoleArray, setConsoleArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/consoles")
      .then((resp) => resp.json())
      .then((data) => {
        setConsoleArray(data)
      })
  }, [])



  let temp = consoleArray[0]


  return (

    <div>
      <NavBar consoleArray={consoleArray} />
      <Header />

      <Switch>
        <Route exact path="/Playstation%205">
          {console.log(consoleArray[0])}
          <Consoles consoleArray={temp} />
        </Route>
        <Route exact path="/">
          <Consoles consoleArray={consoleArray} />
        </Route>
      </Switch>

    </div>
  )
}

export default App;
