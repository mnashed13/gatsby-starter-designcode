// import React, { useState } from 'React'
import React from 'React'
import './Authmodal.css'
import firebase from "firebase/app";
import "firebase/auth";

//SignIn 

const SignIn = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}


//SignUP Function 


// function signIn(e) {
//     const history = useHistory();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const [email] = console.log(e.target.value);
//     const [password] = console.log(e.target.value);

//     const SignIn = () => {
//         auth.isSignInWithEmailandPassword(email, password).then(res => {
//             history.push('./dashboard');
//         }).catch(err => {

//             console.log("Error with Login, please try again")
//         })
//     }
// }
// function handleChange(e) {
//     console.log(e.target.value);
//     // const [email, setEmail] = useState('');
//     // const [password, setPassword] = useState('');

// }

// function signUp() {
//     // const [email, setEmail] = useState('');
//     // const [password, setPassword] = useState('');
// }


// function FirebaseSignInAuth() {
//     console.log("firebase Signin Authentication")
// }

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



// function GoogleSignIn() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);


// }


const AuthenticationModal = props => (

    <div className="AuthModal">
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        {/* Google */}
                        <a href="#" class="social"><i class="fab fa-google-plus-g"  ></i></a>

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

                        <a href="#" class="social"><i class="fab fa-google-plus-g" ></i></a>

                    </div>
                    <span>or use your account</span>


                    <input type="email" placeholder="Email" value={email} />
                    <input type="password" placeholder="Password" value={password} />
                    <a href="#">Forgot your password?</a>
                    <button onClick={SignIn()}>Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
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
)

export default AuthenticationModal
//