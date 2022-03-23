import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);
    let price = 0;
    let shipping = 0;
    let tax = 0;
    for (const product of cart) {
        price = price + product.price;
        shipping = shipping + product.shipping;
    }
    tax = (price * (2 / 100)).toFixed(2);
    const grandTotal = (price + shipping + parseFloat(tax)).toFixed(2);
    return (
        <div className='cart-data'>
            <h1 className='cart-header'>Order Summery</h1>
            <div className="cart-inner">
                <p>Selected Items: { cart.length }</p>
                <p>Total Price: ${ price }</p>
                <p>Shipping Charge: ${ shipping }</p>
                <p>Total Tax: ${ tax }</p>
                <h3 className='grandTotal'>Grand Total: ${ grandTotal }</h3>
            </div>
        </div>
    );
};

export default Cart;