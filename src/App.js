import React, { useState, useEffect } from 'react';
import './App.css';
import Consoles from './components/Consoles';
import NavBar from './components/NavBar';
import AccessoriesCollection from './components/AccessoriesCollection';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';



function App() {

  const [consoleArray, setConsoleArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  function emptyCart() {

    cart.forEach((item) => {
      fetch(`http://localhost:3000/cart/${item.id}`, {
        method: 'DELETE',
      })
    })

    setCart([])
  }

  useEffect(() => {
    fetch("http://localhost:3000/consoles")
      .then((resp) => resp.json())
      .then((data) => {
        setConsoleArray(data)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((resp) => resp.json())
      .then((data) => {
        setCart(data)
      })
  }, [])

  const filteredConsoleArray = consoleArray.filter((item) => {
    return (item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })
  const filteredPlaystationArray = consoleArray[0]?.accessories.filter((item) => {
    return (item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })
  const filteredXboxArray = consoleArray[1]?.accessories.filter((item) => {
    return (item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })
  const filteredSwitchArray = consoleArray[2]?.accessories.filter((item) => {
    return (item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })
  const filteredPCArray = consoleArray[3]?.accessories.filter((item) => {
    return (item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })

  return (

    <div>
      <NavBar consoleArray={consoleArray} setSearchTerm={setSearchTerm} cart={cart} setCart={setCart} />
      <Switch>
        <Route path="/Playstation5">
          <AccessoriesCollection accessoriesList={filteredPlaystationArray} setCart={setCart} cart={cart} />
        </Route>
        <Route path="/XboxSeriesX">
          <AccessoriesCollection accessoriesList={filteredXboxArray} setCart={setCart} cart={cart} />
        </Route>
        <Route path="/NintendoSwitch">
          <AccessoriesCollection accessoriesList={filteredSwitchArray} setCart={setCart} cart={cart} />
        </Route>
        <Route path="/PC">
          <AccessoriesCollection accessoriesList={filteredPCArray} setCart={setCart} cart={cart} />
        </Route>
        <Route exact path="/Cart">
          <AccessoriesCollection accessoriesList={cart} setCart={setCart} cart={cart} />
          <button className='cart_button' onClick={emptyCart}>Empty Cart</button>
        </Route>
        <Route exact path="/">
          <Consoles consoleArray={filteredConsoleArray} setCart={setCart} cart={cart} />
        </Route>
      </Switch>

    </div>
  )
}

export default App;
