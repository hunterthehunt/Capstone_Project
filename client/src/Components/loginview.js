import React, { useState } from 'react';

function LoginView({ setCurrentPage, setIsLoggedIn }) {
  // 1. DEFINED STATE: Holds the member login values initialized as empty strings
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // 2. STATE UPDATE FUNCTION: Updates state dynamically whenever an input changes
  const handleChange = (e) => {
    setLoginData({ 
      ...loginData, 
      [e.target.name]: e.target.value // Dynamically updates the specific state field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 3. LOG & DISPLAY THE STATE OBJECT ON SUBMIT
    console.log("Submitted Member Login State Object:", loginData);
    alert(`Member Login State Object Submitted:\n\n${JSON.stringify(loginData, null, 2)}`);

    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '65vh' }}>
      {/* REUSED CSS CLASS: Defined in App.css */}
      <div className="form-card">
        <h2 className="form-title">Member Login</h2>
        
        {/* FORM ELEMENT */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              name="email" 
              className="form-input" /* REUSED CSS CLASS */
              required 
              value={loginData.email} /* READS FROM STATE */
              onChange={handleChange} /* UPDATES STATE */
              placeholder="collector@waxxed.com" 
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Password</label>
            <input 
              type="password" 
              name="password" 
              className="form-input" /* REUSED CSS CLASS */
              required 
              value={loginData.password} /* READS FROM STATE */
              onChange={handleChange} /* UPDATES STATE */
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