import React from "react";

function ProductCard({ name, image, price, setCart, cart }) {

    function handleClick() {

        let newCartItem = {
            name: name,
            image: image,
            price: price
        }

        setCart([...cart, newCartItem])

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
                    <button className="cart_button" onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
        </li>
    )
}

export default ProductCard;
