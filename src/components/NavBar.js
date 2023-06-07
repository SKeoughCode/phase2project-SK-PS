import React from "react";
import { NavLink } from 'react-router-dom';
import Header from './Header';
import SearchBar from "./SearchBar";
import Cart from "./Cart";


function NavBar({ consoleArray, setSearchTerm, cart, setCart }) {

    const navArray = consoleArray.map((cons) => {
        return (
            <NavLink
                key={cons.id}
                name={cons.name}
                to={cons.name.replace(/\s/g, '')}
            >
                {cons.name}
            </NavLink>
        )
    })

    return (
        <nav>
            <Header className="logo" />
            <SearchBar setSearchTerm={setSearchTerm} />
            <div className="navbar">
                <div className="dropdown">
                    <button className="dropbtn">Menu
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <NavLink
                            key={"Home"}
                            name={"Home"}
                            to={"/"}
                        >
                            Home
                        </NavLink>

                        {navArray}
                    </div>
                </div>
            </div>
            <Cart />
        </nav>
    )
}

export default NavBar;