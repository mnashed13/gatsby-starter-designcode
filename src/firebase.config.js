import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBiP0Vp-oNxOH7BLNtKDOzT8YWFQ3zVrOA",
    authDomain: "gospelofwealth-89b37.firebaseapp.com",
    databaseURL: "https://gospelofwealth-89b37.firebaseio.com",
    projectId: "gospelofwealth-89b37",
    storageBucket: "gospelofwealth-89b37.appspot.com",
    messagingSenderId: "993649495288",
    appId: "1:993649495288:web:8e3ec77003ee4b859a7f0d",
    measurementId: "G-8ZZVJKJNYH"
};


const fire = firebase.initializeApp(firebaseConfig)

export default fire