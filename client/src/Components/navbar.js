import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">WAXXED ON WAX</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/services" className="nav-btn">Services</Link>
        <Link to="/login" className="nav-btn">Login</Link>
        <Link to="/register" className="nav-btn">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;