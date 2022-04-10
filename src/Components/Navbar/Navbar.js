import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../Images/Logo.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css'

const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("Sign Out successful", {
                    toastId: "signOutSuccess"
                });
        })
    }
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
                        {
                            user ? <Link onClick={handleSignOut} to="/login">Sign Out</Link> : <Link to="/login">Log In</Link>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;