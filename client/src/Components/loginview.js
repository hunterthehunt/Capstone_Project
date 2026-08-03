import React, { useState } from 'react';

function LoginView({ setCurrentPage, setIsLoggedIn }) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({ 
      ...loginData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Payload formatted to match MongoDB query parameters
    const loginPayload = {
      email: loginData.email,
      password: loginData.password // Matches MongoDB 'password' key
    };

    console.log("Submitted Member Login State Object:", loginPayload);
    alert(`Member Login State Object Submitted:\n\n${JSON.stringify(loginPayload, null, 2)}`);

    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  return (
    <div className="center-container">
      <div className="form-card">
        <h2 className="form-title">Member Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              name="email" 
              className="form-input" 
              required 
              value={loginData.email} 
              onChange={handleChange} 
              placeholder="collector@waxxed.com" 
            />
          </div>

          <div className="form-group-lg">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              name="password" 
              className="form-input" 
              required 
              value={loginData.password} 
              onChange={handleChange} 
              placeholder="••••••••" 
            />
          </div>

          <button type="submit" className="btn-primary">
            Log In
          </button>
        </form>

        <p onClick={() => setCurrentPage('register')} className="form-link">
          Need an account? Register here
        </p>
      </div>
    </div>
  );
}

export default LoginView;