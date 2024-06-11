// // src/firebase.js

// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyC7DkHdMKchiWhQdmJDs1a98BpM4cM9QRc",
//     authDomain: "travelsite-d6810.firebaseapp.com",
//     projectId: "travelsite-d6810",
//     storageBucket: "travelsite-d6810.appspot.com",
//     messagingSenderId: "484347994653",
//     appId: "1:484347994653:web:ab2d4372d438c82d191cf4",
//     measurementId: "G-8PJH2JH75T"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// export { auth, googleProvider };


import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5leSqcnKai-o1rnotc7O9l7N0wh4dTAE",
    authDomain: "travel-33904.firebaseapp.com",
    projectId: "travel-33904",
    storageBucket: "travel-33904.appspot.com",
    messagingSenderId: "478265352593",
    appId: "1:478265352593:web:7607e45b5ee3b32aba7a30",
    measurementId: "G-XR24F0RNNB"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };