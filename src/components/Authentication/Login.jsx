// src/components/Login.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("token", "your_auth_token");
      setIsAuthenticated(true);
      navigate("/home");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      localStorage.setItem("token", "your_auth_token");
      setIsAuthenticated(true);
      navigate("/home");
    } catch (error) {
      console.error("Error with Google Sign-In:", error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <button className="google-button" onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
      <Link to="/signup">
        <button className="signup-button">Go to Signup</button>
      </Link>
    </div>
  );
};

export default Login;
