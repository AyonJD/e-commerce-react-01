import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    
    let price = 0;
    let shipping = 0;
    let tax = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        price = price + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    tax = (price * (2 / 100)).toFixed(2);
    const grandTotal = (price + shipping + parseFloat(tax)).toFixed(2);
    return (
        <div className='cart-data'>
            <h1 className='cart-header'>Order Summery</h1>
            <div className="cart-inner">
                <p>Selected Items: { quantity }</p>
                <p>Total Price: ${ price }</p>
                <p>Shipping Charge: ${ shipping }</p>
                <p>Total Tax: ${ tax }</p>
                <h3 className='grandTotal'>Grand Total: ${ grandTotal }</h3>
            </div>
            {props.children}
        </div>
    );
};

export default Cart;