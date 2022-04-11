import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../../Assets/google.svg'
import auth from '../../firebase.init';
import useInput from '../Hooks/useInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    // Redirect to the last page user visited
    const [user] = useAuthState(auth);
    const { email, password, getEmail, getPassword } = useInput()
    const location = useLocation();
    const navigate = useNavigate()
    // useEffect
    const [
        signInWithEmailAndPassword, , , error
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true })
    }
    const handlelogin = event => {
        event.preventDefault();
        // console.log(email, password);
        
        signInWithEmailAndPassword(email, password)
        
    }
    useEffect(() => {
        console.log(error)
        if (error) {
            toast.error("Wrong email or password!", {
                toastId: "passWrong"
            });
            return;
        }
    }, [error])
    const handleSignInWIthGoogle = () => {
        signInWithGoogle()
    }
    // console.log(error);
    return (
        <div>
            <form onSubmit={handlelogin} className='form'>
                <h2 className='form-header'>Log In</h2>
                <div className="form-group">
                    <div className='input-div'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={getEmail} type="email" name="email" id="" />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={getPassword} type="password" name="password" id="" />
                    </div>
                </div>
                <div className="button-group">
                    <button type='submit' className='submit-button'>Log In</button>
                    <p>New to Ema-John? <Link className='form-redirect' to="/sign-up">Join Now</Link></p>
                </div>
                <p className='form-devider'>or</p>
                <div className="button-group">
                    <button onClick={handleSignInWIthGoogle} className='google-button'><img src={googleLogo} alt="" /><p>Continue with Google</p></button>
                </div>
            </form>
        </div>
    );
};

export default LogIn;