import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignUp.css'
import googleLogo from '../../Assets/google.svg'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useInput from '../Hooks/useInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [user] = useAuthState(auth)
    const { email, password, confirmPassword, getEmail, getPassword, getConfirmPassword } = useInput();
    const [
        createUserWithEmailAndPassword, , , error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';


    const handleSubmitForm = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Password doesn't match!", {
                toastId: "passWrong"
            });
            return;
        }
        
        console.log(error);
        //Prevent users to use same email for multiple sign up
        if (error) {
            toast.error("User already exists with this email!", {
                toastId: "emailIsInUse"
            });
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle()

    }
    // Redirect to the previous visited page after sign up
    if (user) {
        toast.success("Wooo! Sign Up successful", {
            toastId: "signUpSuccess"
        });
        navigate(from, { replace: true })
    }
    return (
        <div>
            <form onSubmit={handleSubmitForm} className='form'>
                <h2 className='form-header'>Sign Up</h2>
                <div className="form-group">
                    <div className='input-div'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={getEmail} type="email" name="email" id="" />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={getPassword} type="password" name="password" id="" />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="conformPassword">Confirm password</label>
                        <input onBlur={getConfirmPassword} type="password" name="conformPassword" id="" />
                    </div>
                </div>
                <div className="button-group">
                    <button type='submit' className='submit-button'>Sign Up</button>
                    <p>Already have an account? <Link className='form-redirect' to="/login">Login Here</Link></p>
                </div>
                <p className='form-devider'>or</p>
                <div className="button-group">
                    <button onClick={handleSignInWithGoogle} className='google-button'><img src={googleLogo} alt="" /><p>Continue with Google</p></button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;