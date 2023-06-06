import React from "react";
import ProductCard from './ProductCard';

function Consoles({ consoleArray }) {

    console.log(consoleArray);
    const productCards = consoleArray.map((item) => {
        return <ProductCard key={item.id} name={item.name} image={item.image} price={item.price} />
    })

    return (<div className="cards">
        {productCards}
    </div>)
}

export default Consoles;



// function ProductCollection({ consoleArray }) {

//     const productCards = consoleArray.map((console) => {
//         return (<ProductCard key={console.id} name={console.name} image={console.image} price={console.price} />)
//     })

//     return (
//         <div className="cards">
//             {productCards}

//         </div>)
// }

// export default ProductCollection;