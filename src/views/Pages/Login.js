import React from 'react'
import google from "../../Assets/images/google.png"
import apple from "../../Assets/images/apple.png"
import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const Navigate = useNavigate()

    const signIn = useGoogleLogin({
        clientId: '620656876914-b8otjdbu1l3013j1rr6ur21v29cr9752.apps.googleusercontent.com',
        onSuccess: ((e) => { Navigate('/dashboard') }),
        onError: ((e) => { console.log("ERR:", e) }),
        autoLoad: false, // Set to true if you want to auto-load the Google Sign-In button
    });


    return (
        <div className='loginContainer'>
            <div className='login-side-bar'>
                <h1>Board.</h1>
            </div>
            <div className='right-form-containter'>
                <div className='sign-in-form'>
                    <div className='form-header'>
                        <h3>Sign In</h3>
                        <p>Sign in to your account</p>
                    </div>
                    <div className='auth'>
                        <div className='authButton' onClick={() => { signIn() }}>
                            <img src={google} />
                            <p>Sign in with Google</p>
                        </div>
                        <div className='authButton'>
                            <img src={apple} />
                            <p>Sign in with Apple</p>
                        </div>
                    </div>
                    <div className='form'>
                        <div className='email-input-label'>
                            <label htmlFor="email">Email address</label>
                            <input id='email' placeholder='johndoe@gmail.com' />
                        </div>
                        <div className='password-input-label'>
                            <label htmlFor="password">Password</label>
                            <input id='password' placeholder='' type='password' />
                        </div>
                        <div className='forgot-password-sign-in'>
                            <p>Forgot password?</p>
                            <button><b>Sign In</b></button>
                        </div>
                    </div>
                    <div className='register-here'>
                        <p className='dont-have-text'>Don't have an account?</p>
                        <p className='register-text'>Register here</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
