import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCe3Rem1wHaBjzufADNW-HmtjfC4kqp4zA",
    authDomain: "travelholidays-9ad9b.firebaseapp.com",
    projectId: "travelholidays-9ad9b",
    storageBucket: "travelholidays-9ad9b.appspot.com",
    messagingSenderId: "295671139470",
    appId: "1:295671139470:web:0a8c5e214396f6ac6fcddf",
    measurementId: "G-FH7NFTCYE1"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)