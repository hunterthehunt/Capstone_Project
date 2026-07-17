import React from 'react';

function Navbar({ setCurrentPage, isLoggedIn, setIsLoggedIn }) {
  return (
    <header style={{ backgroundColor: '#09090a', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px double #d4af37' }}>
      <div>
        <h1 style={{ color: '#f4ebd9', fontSize: '1.4rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>Waxxed on Waxx</h1>
      </div>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', cursor: 'pointer' }}>
          <li onClick={() => setCurrentPage('home')}>Home</li>
          <li onClick={() => setCurrentPage('services')}>Services</li>
          {isLoggedIn ? (
            <li onClick={() => { setIsLoggedIn(false); setCurrentPage('home'); }}>Logout</li>
          ) : (
            <li onClick={() => setCurrentPage('login')}>Lounge Entry</li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;