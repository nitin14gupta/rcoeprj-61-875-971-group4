import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify'; // Notification pop-ups
import { auth } from '../constants/firebase'; // Adjust this path according to your project structure
import '../styles/Auth.css'; // Import the custom CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in Successfully", { position: "top-center" });
      navigate('/home'); // Redirect to dashboard upon successful login
    } catch (err) {
      setError(err.message);
      toast.error(err.message, { position: "bottom-center" });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card slide-in">
        <h2 className="auth-title">Welcome Back!</h2>
        {error && <p className="auth-error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="form-group animated-input">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group animated-input">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 btn-animated">
            Login
          </button>
        </form>
        <p className="auth-switch">
          New here? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
