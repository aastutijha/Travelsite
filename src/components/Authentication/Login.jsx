import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import './Login.css'; // Assuming your original CSS applies correctly
import 'boxicons'; // Ensure you have boxicons installed or imported correctly
import googleLogo from './google.jpg'; // Import the Google logo image correctly

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('token', 'your_auth_token');
      setIsAuthenticated(true);
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      localStorage.setItem('token', 'your_auth_token');
      setIsAuthenticated(true);
      navigate('/home');
    } catch (error) {
      console.error('Error with Google Sign-In:', error);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember Me</label>
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="google-btn-container">
          <button type="button" className="google-btn" onClick={handleGoogleSignIn}>
            <img src={googleLogo} alt="Google Logo" className="google-logo" />
          </button>
        </div>
        <div className="register-link">
          <p>Don't have an account? <Link to="/signup">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
