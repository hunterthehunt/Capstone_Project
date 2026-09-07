import React from 'react';
import { Link } from 'react-router-dom';

function RegisterView() {
  return (
    <div className="auth-page-container">
      <div className="auth-card tile-border">
        <h2 className="auth-title">Join the Vinyl Club</h2>
        
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="e.g. Miles Davis" 
              className="auth-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="collector@waxxed.com" 
              className="auth-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              className="auth-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              placeholder="••••••••" 
              className="auth-input"
            />
          </div>

          <button type="submit" className="auth-btn">
            Create Account
          </button>
        </form>

        <p className="auth-footer-text">
          Already a member? <Link to="/login" className="auth-link">Log in here</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterView;