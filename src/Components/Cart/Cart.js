import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart);
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
        <div>
            <p>Selected Items: { cart.length }</p>
            <p>Total Price: ${ price }</p>
            <p>Shipping Charge: ${ shipping }</p>
            <p>Total Tax: ${ tax }</p>
            <h3>Grand Total: ${ grandTotal }</h3>
        </div>
    );
};

export default Cart;