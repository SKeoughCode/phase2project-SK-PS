import React from "react";
import { NavLink } from 'react-router-dom';

function Cart() {
    return (
        <button className="cart_button">
            <NavLink
                key={"Cart"}
                name={"Cart"}
                to={"/Cart"}>

                <img src="https://www.iconpacks.net/icons/2/free-shopping-cart-icon-3041-thumb.png"></img>

            </NavLink>

        </button>
    )
}

export default Cart;