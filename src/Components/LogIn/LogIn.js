import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../Assets/google.svg'

const LogIn = () => {
    return (
        <div>
            <form className='form'>
                <h2 className='form-header'>Log In</h2>
                <div className="form-group">
                    <div className='input-div'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                </div>
                <div className="button-group">
                    <button className='submit-button'>Sign Up</button>
                    <p>New to Ema-John? <Link className='form-redirect' to="/sign-up">Join Now</Link></p>
                </div>
                <p className='form-devider'>or</p>
                <div className="button-group">
                    <button className='google-button'><img src={googleLogo} alt="" /><p>Continue with Google</p></button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;