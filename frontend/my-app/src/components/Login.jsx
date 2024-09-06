import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/index.css"
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="auth-form-container">
      <h2 className='title'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='title'>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='title'>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className='title'>
        Don't have an account? <Link className="title" to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}

export default Login;
