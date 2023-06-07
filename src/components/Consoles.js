import React from "react";
import ProductCard from './ProductCard';

function Consoles({ consoleArray, name }) {

    console.log(consoleArray);
    console.log(name)

    let chosen = consoleArray?.filter(console => console.name === name)[0]


    const productCards = consoleArray?.map((item) => {
        return <ProductCard key={item.id} name={item.name} image={item.image} price={item.price} />
    })

    return (<div className="cards">
        {productCards}
    </div>)
}

export default Consoles;