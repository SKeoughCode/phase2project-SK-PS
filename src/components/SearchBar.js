import React from "react";

function SearchBar({ setSearchTerm }) {

    function handleChange(e) {
        console.log(e.target.value)
        setSearchTerm(e.target.value);
    }


    return (
        <div className="search">
            <input type="text" className="searchTerm" onChange={handleChange} />
        </div>
    )
}

export default SearchBar;