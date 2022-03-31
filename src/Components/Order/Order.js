import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import OrderSingleCard from '../OrderSingleCard/OrderSingleCard';
import './Order.css'

const Order = () => {
    const [cart, setCart] = useCart()
    return (
        <div className='shop-section'>
            <div className="order-section">
                {
                    cart.map(product => <OrderSingleCard key = {product.id} singleProduct = {product}></OrderSingleCard>)
                }
            </div>
            <div className="cart-section order-cart">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Order;