import React from 'react';
import { Link } from 'react-router-dom';

function LoginView() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="section-title">Member Login</h2>
        <form>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="collector@waxxed.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button type="submit" className="nav-btn auth-btn">
            Sign In
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginView;