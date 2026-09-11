import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">WAXXED ON WAX</Link>
      </div>

      <div className="nav-right">
        {/* Requirement 4: Display logged-in user message or guest status */}
        {user ? (
          <div className="user-welcome">
            <span>Welcome back, <strong>{user.name || user.email}</strong>!</span>
            <span className="member-badge">VIP MEMBER</span>
          </div>
        ) : (
          <span className="guest-tag">Browsing as Guest</span>
        )}

        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>

          {/* Requirement 3: Conditional Login and Logout buttons */}
          {user ? (
            <button onClick={onLogout} className="btn logout-btn">Logout</button>
          ) : (
            <>
              <Link to="/login" className="btn login-btn">Login</Link>
              <Link to="/register" className="btn register-btn">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;