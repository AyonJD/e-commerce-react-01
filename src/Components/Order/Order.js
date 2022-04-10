import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hooks/useCart';
import OrderSingleCard from '../OrderSingleCard/OrderSingleCard';
import './Order.css'

const Order = () => {
    const navigate = useNavigate()
    const [cart, setCart] = useCart();
    //Handle addeded product------>
    const removeFromOrder = id => {
        const rest = cart.filter(product => product.id !== id);
        setCart(rest);
        removeFromDb(id)
    }
    return (
        <div className='shop-section'>
            <div className="order-section">
                {
                    cart.map(product => <OrderSingleCard key={product.id} removeFromOrder={removeFromOrder} singleProduct={product}></OrderSingleCard>)
                }
            </div>
            <div className="cart-section order-cart">
                <Cart cart={cart}>
                    <button onClick={() => navigate('/checkout')} className='cart-button proceed'>Proceed to Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;