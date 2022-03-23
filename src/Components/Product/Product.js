import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const { img, name, price, seller, ratings } = product;
    // console.log(product);
    return (
        <div className='product-card'>
            <div className="image">
                    <img src={img} alt="" />
                </div>
            <div className="card-content">
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
                <div className="paagraph">
                    <p className='product-card-seller'>Manuacturer: {seller}</p>
                    <p>Rting: {ratings} stars</p>
                </div>
            </div>
            <div className="button">
                <button className='cart-btn'><p className='btn-text'>Add to Cart</p><FontAwesomeIcon className='icon' icon={faCartPlus} /></button>
            </div>
        </div>
    );
};

export default Product;