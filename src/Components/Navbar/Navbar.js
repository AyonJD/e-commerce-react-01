import React from 'react';
import logo from '../Images/Logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="logo-section">
                <img src={ logo } alt="" />
            </div>
            <div className="menu-section">
                <ul className='menu-items'>
                    <li>
                        <a href="#">Order</a>
                    </li>
                    <li>
                        <a href="#">Order Review</a>
                    </li>
                    <li>
                        <a href="#">Manage Inventory</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;