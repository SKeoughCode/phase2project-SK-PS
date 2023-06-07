import React from "react";
import ProductCard from "./ProductCard"

function AccessoriesCollection({ accessoriesList }) {

    console.log(accessoriesList)

    const accessoryCards = accessoriesList?.map((item) => {
        return <ProductCard key={item.name} name={item.name} image={item.image} price={item.price} />
    })

    return (<div className="cards">
        {accessoryCards}
    </div>)
}

export default AccessoriesCollection;