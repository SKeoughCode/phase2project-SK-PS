import React from "react";
import ProductCard from './ProductCard';

function ProductCollection({ consoleArray }) {

    const productCards = consoleArray.map((console) => {
        return (<ProductCard key={console.id} name={console.name} image={console.image} price={console.price} />)
    })

    return (
        <div className="cards">
            {productCards}

        </div>)
}

export default ProductCollection;