// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCe3Rem1wHaBjzufADNW-HmtjfC4kqp4zA",
    authDomain: "travelholidays-9ad9b.firebaseapp.com",
    projectId: "travelholidays-9ad9b",
    storageBucket: "travelholidays-9ad9b.appspot.com",
    messagingSenderId: "295671139470",
    appId: "1:295671139470:web:0a8c5e214396f6ac6fcddf",
    measurementId: "G-FH7NFTCYE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);