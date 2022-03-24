import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../fakedb';
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
    }, []);
    //useEffect for getting data from local storage
    //Aikhane useEffect er dependency products na dile uporer products load hobar age e nicar useEffect exicute hoschilo j jonno addededProducts undifined hoschilo cause products er vitor kichu paschilo na.
    useEffect(() => {
        const storedCart = getStoredCart();
        //making an impty array to put the filtered product with new quantity
        const savedCart = [];
        for (const id in storedCart) {
            const addededProduct = products.find(product => product.id === id);
            //setting the quantity
            if (addededProduct) {
                const quantity = storedCart[id]
                addededProduct.quantity = quantity;
                savedCart.push(addededProduct)
            }
        }
        setCart(savedCart)
    }, [products])
    //Creacting function to handle the button in product.js
    const handleAdToCart = props => {
        //Solve, cart was not updating quantity
        let newCart = [];
        const exists = cart.find(product => product.id === props.id);
        //exists = undefined
        //or
        //exists = {props};
        if (!exists) {
            props.quantity = 1;
            newCart = [...cart, props];
        } else {
            const rest = cart.filter(product => product.id !== props.id);
            //rest = [{},{}]
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
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