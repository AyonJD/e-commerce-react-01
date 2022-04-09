import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to="/">Shop</Link>
                    </li>
                    <li>
                        <Link to="/order-review">Order Review</Link>
                    </li>
                    <li>
                        <Link to="/inventory">Manage Inventory</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;