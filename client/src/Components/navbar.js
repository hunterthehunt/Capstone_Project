import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav 
      style={{
        backgroundColor: '#1a1a1a',
        borderBottom: '1px solid #333',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Brand / Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Link 
          to="/" 
          style={{ 
            color: 'var(--gold-primary, #d4af37)', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            fontSize: '1.2rem',
            letterSpacing: '1px'
          }}
        >
          WAXXED ON WAX
        </Link>
        <span 
          style={{ 
            color: '#888', 
            fontSize: '0.85rem', 
            borderLeft: '1px solid #444', 
            paddingLeft: '15px' 
          }}
        >
          {user ? `Logged in as: ${user.name || user.email || 'VIP Member'}` : 'Browsing as Guest'}
        </span>
      </div>

      {/* Navigation Links & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Link 
          to="/" 
          style={{ color: '#e0e0e0', textDecoration: 'none', fontSize: '0.95rem' }}
        >
          Home
        </Link>
        <Link 
          to="/services" 
          style={{ color: '#e0e0e0', textDecoration: 'none', fontSize: '0.95rem' }}
        >
          Services
        </Link>

        {user ? (
          <button 
            onClick={onLogout}
            style={{
              padding: '6px 14px',
              backgroundColor: 'transparent',
              color: 'var(--gold-primary, #d4af37)',
              border: '1px solid var(--gold-primary, #d4af37)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link 
              to="/login" 
              style={{ color: '#e0e0e0', textDecoration: 'none', fontSize: '0.95rem' }}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              style={{
                padding: '6px 14px',
                backgroundColor: 'var(--gold-primary, #d4af37)',
                color: '#000',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '0.9rem'
              }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;