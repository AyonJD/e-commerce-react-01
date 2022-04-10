import React from 'react';
import './CheckOut.css'

const CheckOut = () => {
    return (
        <div>
            <form className='form'>
                <h2 className='form-header'>Order Form</h2>
                <div className="form-group">
                    <div className='input-div'>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="email" id="" />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="address">Shipping Address</label>
                        <input type="text" name="address" id="" />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="phone">Contact Number</label>
                        <input type="text" name="phone" id="" />
                    </div>
                </div>
                <div className="button-group">
                    <button className='submit-button place-order'>Place Order</button>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;