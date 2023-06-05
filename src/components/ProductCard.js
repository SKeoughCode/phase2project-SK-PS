import React from "react";

function ProductCard({ name, image, price }) {

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
                    <div className="card__detail">

                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProductCard;
