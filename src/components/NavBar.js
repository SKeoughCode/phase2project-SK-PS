import React from "react";

function NavBar({ consoleArray }) {

    const navArray = consoleArray.map((cons) => {
        return (<a key={cons.id} name={cons.name} href={cons.name} onClick={handleNavigate}>{cons.name}</a>)
    })

    function handleNavigate(e) {
        e.preventDefault();
        window.history.pushState(null, "", e.target.href);
    }

    return (
        <nav>
            {navArray}
        </nav>
    )
}

export default NavBar;