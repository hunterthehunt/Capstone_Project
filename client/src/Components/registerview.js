import React from 'react';
import { Link } from 'react-router-dom';

function RegisterView() {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="section-title">Join the Vinyl Club</h2>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="e.g. Miles Davis" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="collector@waxxed.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button type="submit" className="nav-btn auth-btn">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already a member? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterView;