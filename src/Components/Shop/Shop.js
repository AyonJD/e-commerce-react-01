import React, { useEffect, useState } from 'react';
import { addToDb } from '../../fakedb';
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
    //Creacting function to handle the button in product.js
    const handleAdToCart = props => {
        // console.log(props);
        const newCart = [...cart, props];
        setCart(newCart);
        addToDb(props.id)
    }
    
    return (
        <div className='shop-section'>
            <div className="products-section">
                {
                    products.map(product => <Product key={product.id} product={product} handleAdToCart={handleAdToCart}></Product>)
                }
            </div>
            <div className="cart-section">
                    <Cart cart={ cart }></Cart>
            </div>
        </div>
    );
};

export default Shop;