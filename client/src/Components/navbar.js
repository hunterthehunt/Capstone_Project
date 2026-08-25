import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <h2>WAXXED ON WAXX</h2>
      </div>
      <div className="navbar-menu">
        <Link to="/">
          <button className="nav-btn">Home</button>
        </Link>
        <Link to="/services">
          <button className="nav-btn">Services</button>
        </Link>
        <Link to="/login">
          <button className="nav-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="nav-btn">Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;