import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC_aqC_svU3bcYuk98ThEXh_2HHElNrwYA",
    authDomain: "react-chat-app-17ded.firebaseapp.com",
    projectId: "react-chat-app-17ded",
    storageBucket: "react-chat-app-17ded.appspot.com",
    messagingSenderId: "350815016687",
    appId: "1:350815016687:web:f268d4e0dd3f4021c26d1a"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
