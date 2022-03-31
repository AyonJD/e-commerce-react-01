import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './OrderSingleCard.css'

const OrderSingleCard = ({ singleProduct,  removeFromOrder }) => {
    
    const { img, name, price, quantity, id } = singleProduct;
    return (
        <div className='order-border'>
            <img className='order-image' src={img} alt="" />
            <div className="order-content">
                <div className="main-content">
                    <p>{ name }</p>
                    <p>Price: ${ price }</p>
                    <p>Quantity: { quantity }</p>
                </div>
                <FontAwesomeIcon onClick={() => removeFromOrder(id)} className='order-delete-icon' icon={faTrashAlt} />
            </div>
        </div>
    );
};

export default OrderSingleCard;