import React, { useState, useEffect } from 'react'
import './Authmodal.css'
import { Icon, InlineIcon } from '@iconify/react';
import facebookF from '@iconify/icons-uim/facebook-f';
import googleIcon from '@iconify/icons-grommet-icons/google';
import fire from '../firebase.config';

function AuthenticationModal() {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState()
    const history = useHistory();


    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }


    const HandleLogin = () => {
        clearErrors()
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {

                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-diabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message)
                        break;
                }
            }
            )

        console.log("Login Succssful")
        // .getRedirectResult()
        history.push('./dashboard')

    };


    const HandleSignUp = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {

                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/wea-password":
                        setPasswordError(err.message)
                        break;
                }
            }
            )
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {

        fire.auth().onAuthStateChanged((user) => {

            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("")
            }
        })
    };

    useEffect(() => {
        authListener();

    }, []);



    function handeMotionSignUp() {
        console.log("hande Sign Up Motion")
        const container = document.getElementById('container');

        container.classList.add("right-panel-active");
    }

    function handeMotionSignIn() {
        console.log("hande Sign In Motion")
        const container = document.getElementById('container');

        container.classList.remove("right-panel-active");

    }

    function GoogleSignIn() {
        console.log("Google Sign In Method start")
    }

    function FacebookSignIn() {
        console.log("Facebook SignIn Method Start")
    }

    function GoogleSignUp() {
        console.log("Google Sign Up Method")
    }

    function FacebookSignUp() {
        console.log("Facebook Sign Up Method")
    }









    return (
        <div>
            <div className="AuthModal">
                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div class="social-container">
                                {/* Google */}
                                {/* <a href="#" class="social"><Icon icon={facebookF} style={{ color: '#103a79', fontSize: '24px' }} onClick={FacebookSignUp} /></a>
                                <a href="#" class="social"><Icon icon={googleIcon} style={{ fontSize: '24px' }} onClick={GoogleSignUp} /> </a> */}

                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div class="social-container">

                                <a href="#" class="social">
                                    <Icon icon={facebookF} style={{ color: '#103a79', fontSize: '24px' }} onClick={FacebookSignIn} />
                                </a>
                                <a href="#" class="social">
                                    <Icon icon={googleIcon} style={{ fontSize: '24px' }} onClick={GoogleSignIn} />
                                </a>

                            </div>
                            <span>or use your account</span>

                            <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <p className="errorMsg">{emailError}</p>
                            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <p className="errorMessage">{passwordError}</p>



                            <a href="#">Forgot your password?</a>
                            {/* <div className="btnContainer"> */}
                            <button onClick={HandleLogin}>Sign In</button>
                            {/* </div> */}
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <img src={require('../assets/LogoWhite.png')} />
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button class="ghost" id="signIn" onClick={handeMotionSignIn}>Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <img src={require('../assets/LogoWhite.png')} />
                                <h1>Hey, there !</h1>
                                <p>Enter your personal details and start journey with us</p>

                                <button class="ghost" onClick={handeMotionSignUp} >Sign Up</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};
export default AuthenticationModal
