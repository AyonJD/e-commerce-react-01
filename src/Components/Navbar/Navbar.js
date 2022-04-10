import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="logo-section">
            <Link to="/"><img src={ logo } alt="" /></Link>
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
                        <Link to="/login">Log In</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;