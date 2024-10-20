import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../constants/firebase'; // Make sure to adjust the path
import { setDoc, doc } from 'firebase/firestore';
import '../styles/Auth.css'; // Custom CSS

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Register user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user information in Firestore
      if (user) {
        const [firstName, ...lastNameArr] = name.split(' ');
        const lastName = lastNameArr.join(' '); // In case the user has a middle name

        await setDoc(doc(db, 'Users', user.uid), {
          email: user.email,
          firstName: firstName || '', // Handle case where no first name
          lastName: lastName || '',  // Handle case where no last name
          photo: '' // Placeholder for the user's photo, can be updated later
        });
      }

      // Redirect to dashboard after successful registration
      navigate('/home');
    } catch (err) {
      setError(err.message); // Show error if registration fails
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card slide-in">
        <h2 className="auth-title">Join Us!</h2>
        {error && <p className="auth-error">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="form-group animated-input">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <button type="submit" className="btn btn-success w-100 btn-animated">
            Register
          </button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
