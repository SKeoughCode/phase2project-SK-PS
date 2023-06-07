import React from "react";
import { NavLink } from 'react-router-dom';


function NavBar({ consoleArray }) {

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
            <NavLink
                key={"Home"}
                name={"Home"}
                to={"/"}
            >
                Home
            </NavLink>

            {navArray}
        </nav>
    )
}

export default NavBar;