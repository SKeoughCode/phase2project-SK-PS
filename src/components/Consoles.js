import React from "react";
import ProductCard from './ProductCard';

function Consoles({ consoleArray, setCart, cart }) {

    const productCards = consoleArray?.map((item) => {
        return <ProductCard key={item.id} name={item.name} image={item.image} price={item.price} setCart={setCart} cart={cart} />
    })

    return (<div className="cards">
        {productCards}
    </div>)
}

export default Consoles;