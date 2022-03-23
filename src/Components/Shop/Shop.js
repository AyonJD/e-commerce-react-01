import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);
    //Creacting function to handle the button in product.js
    const handleAdToCart = props => {
        const newCart = [...cart, props]
        setCart(newCart)
    }
    // console.log(cart);
    return (
        <div className='shop-section'>
            <div className="products-section">
                {
                    products.map(product => <Product key={product.id} product={product} handleAdToCart={handleAdToCart}></Product>)
                }
            </div>
            <div className="cart-section">
                <h1 className='cart-header'>Order Summery</h1>
                <div className="cart-selected-info">
                    <Cart cart={ cart }></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;