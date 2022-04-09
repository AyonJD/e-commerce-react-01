import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
import googleLogo from '../../Assets/google.svg'

const SignUp = () => {
    return (
        <div>
            <form className='form'>
                <h2 className='form-header'>Sign Up</h2>
                <div className="form-group">
                    <div className='input-div'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="conformPassword">Confirm password</label>
                        <input type="password" name="conformPassword" id="" />
                    </div>
                </div>
                <div className="button-group">
                    <button className='submit-button'>Sign Up</button>
                    <p>Already have an account? <Link className='form-redirect' to="/">Login Here</Link></p>
                </div>
                <p className='form-devider'>or</p>
                <div className="button-group">
                    <button className='google-button'><img src={googleLogo} alt="" /><p>Continue with Google</p></button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;