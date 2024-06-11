// src/components/Signup.jsx

import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup Successful");
      navigate("/home"); 
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
