import React, { useState } from "react";

function ProductCard({ name, image, price, setCart, cart }) {
    const [inCart, setInCart] = useState(false);

    function handleClick() {

        let newCartItem = {
            name: name,
            image: image,
            price: price
        }

        const postableItem = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCartItem)
        }

        fetch('http://localhost:3000/cart', postableItem)
            .then((resp) => resp.json())
            .then((data) => {
                setInCart(true)
                setCart([...cart, data])
            })

    }

    return (
        <li className="cards__item">
            <div className="card">
                <img
                    src={image}
                    alt={name}
                    className="card__image"
                />
                <div className="card__content">
                    <div className="card__title">{name}</div>
                    <p className="card__text">${price}</p>
                    <button className="cart_button" onClick={handleClick}>{!inCart ? "Add to Cart" : "Item in Cart"}</button>
                </div>
            </div>
        </li>
    )
}

export default ProductCard;
