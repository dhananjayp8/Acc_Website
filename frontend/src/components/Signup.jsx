// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "../styles/index.css"

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
   
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="auth-form-container">
//       <h2 className="title">Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label className="title">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label className="title">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label className="title">Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//       <p className="title">
//         Already have an account? <Link className="title" to="/login">Login here</Link>
//       </p>
//     </div>
//   );
// }

// export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg";
import bgimage from "../assets/bgimage.png";
import '../styles/login.css' // Import the CSS file

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            if (!response.ok) {
                const errorData = await response.json(); 
                throw new Error(errorData.message || 'Login failed');
            }
    
            const data = await response.json();
            console.log('Login successful:', data);
            // Navigate or save token here
    
        } catch (error) {
            console.error('Error:', error); 
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="login-container">
            <div 
                className="background-image"
                style={{
                    backgroundImage: `url(${bgimage})`,
                }}
            />
            <div className="overlay" />
            <div className="login-box">
                <div className="logo-container">
                    <img src={logo} alt="Digitalflake logo" className="logo" />
                    <p className="welcome-text">Welcome !!!🚀</p>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                <div className="form-group">
                        <label htmlFor="text">Name</label>
                        <input
                            id="name"
                            type="name"
                            placeholder="Full Name"
                           
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email-id</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email-id"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="fas fa-eye password-icon"></i>
                        </div>
                    </div>
                    <div className="forgot-password">
                        <a onClick={handleForgotPassword}>Already have an account?</a>
                    </div>
                    <div className="login-button-container">
                        <button type="button" onClick={handleLogin}>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
