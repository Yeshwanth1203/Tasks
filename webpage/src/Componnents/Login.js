import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    window.location.replace('/home');
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordRequirements(true);
      setLoggedIn(false);
      return;
    }

    setLoggedIn(true);
    alert('Logged in successfully!');
    window.location.replace('/home'); // Redirect after clicking OK
  };

  return (
    <>
      {isOpen && (
        <div className="login-modal">
          <div className="auth-form">
            <button className="close-button" onClick={handleClose}>X</button>
            <h2>Login</h2>
            {!loggedIn && (
              <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="password-input-container">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                  <span 
                    className="password-toggle-icon" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                {passwordRequirements && (
                  <p className="password-requirements">
                    Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 symbol, 1 number, and be at least 8 characters long.
                  </p>
                )}
                <button type="submit">Login</button>
              </form>
            )}
            {/* <p>Don't have an account? <Link to="/signup">Signup</Link></p> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
