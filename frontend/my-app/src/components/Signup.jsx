import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/index.css"

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
   
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="auth-form-container">
      <h2 className="title">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="title">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="title">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="title">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p className="title">
        Already have an account? <Link className="title" to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Signup;
