import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    // console.log(products);
    return (
        <div className='shop-section'>
            <div className="products-section">
                {
                    products.map(product => <Product key={product.id} product = {product}></Product>)
                }
            </div>
            <div className="cart-section">
                <h1>cart</h1>
            </div>
        </div>
    );
};

export default Shop;