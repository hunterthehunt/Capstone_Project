import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginView() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Authenticating...');

    try {
      const response = await fetch('http://localhost:5000/api/members/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setStatusMessage(`Welcome back, ${data.user?.name || 'Member'}!`);
      } else {
        setIsSuccess(false);
        setStatusMessage(data.message || 'User not found in system.');
      }
    } catch (err) {
      setIsSuccess(false);
      setStatusMessage('Unable to connect to authentication server.');
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card tile-border">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Member Login
        </h2>

        {statusMessage && (
          <p
            style={{
              color: isSuccess ? '#d4af37' : '#e53935',
              textAlign: 'center',
              marginBottom: '15px',
              fontWeight: 'bold',
              fontSize: '0.95rem'
            }}
          >
            {statusMessage}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', color: '#d4af37', marginBottom: '5px' }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="collector@waxxed.com"
              required
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#221e1a',
                border: '1px solid #443c33',
                color: '#e0d6c3',
                borderRadius: '4px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', color: '#d4af37', marginBottom: '5px' }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#221e1a',
                border: '1px solid #443c33',
                color: '#e0d6c3',
                borderRadius: '4px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            type="submit"
            className="nav-btn auth-btn"
            style={{ width: '100%', padding: '10px', cursor: 'pointer' }}
          >
            Sign In
          </button>
        </form>

        <p className="auth-footer" style={{ textAlign: 'center', marginTop: '15px', color: '#a09585' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#d4af37', textDecoration: 'none' }}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginView;