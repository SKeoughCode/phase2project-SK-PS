import React, { useState, useEffect } from 'react';
import './App.css';
import Consoles from './components/Consoles';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AccessoriesCollection from './components/AccessoriesCollection';
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





  return (

    <div>
      <NavBar consoleArray={consoleArray} />
      <Header />

      <Switch>
        <Route path="/Playstation5">
          {/* {console.log(consoleArray[0]?.accessories)} */}
          <AccessoriesCollection accessoriesList={consoleArray[0]?.accessories} />
        </Route>
        <Route path="/XboxSeriesX">
          <AccessoriesCollection accessoriesList={consoleArray[1]?.accessories} />
        </Route>
        <Route path="/NintendoSwitch">
          <AccessoriesCollection accessoriesList={consoleArray[2]?.accessories} />
        </Route>
        <Route path="/PC">
          <AccessoriesCollection accessoriesList={consoleArray[3]?.accessories} />
        </Route>
        <Route exact path="/">
          <Consoles consoleArray={consoleArray} />
        </Route>
      </Switch>

    </div>
  )
}

export default App;
