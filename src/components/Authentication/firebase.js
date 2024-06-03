import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7DkHdMKchiWhQdmJDs1a98BpM4cM9QRc",
  authDomain: "travelsite-d6810.firebaseapp.com",
  projectId: "travelsite-d6810",
  storageBucket: "travelsite-d6810.appspot.com",
  messagingSenderId: "484347994653",
  appId: "1:484347994653:web:ab2d4372d438c82d191cf4",
  measurementId: "G-8PJH2JH75T"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };