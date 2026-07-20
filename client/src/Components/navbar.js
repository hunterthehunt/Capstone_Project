import React from 'react';

function Navbar({ currentPage, setCurrentPage, isLoggedIn, setIsLoggedIn }) {
  const navItemStyle = (page) => ({
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    color: currentPage === page ? '#d4af37' : '#f4ebd9',
    borderBottom: currentPage === page ? '2px solid #d4af37' : 'none',
    fontWeight: currentPage === page ? 'bold' : 'normal',
  });

  return (
    <header style={{ backgroundColor: '#09090a', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px double #d4af37' }}>
      <h1 style={{ color: '#f4ebd9', fontSize: '1.4rem', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>
        Waxxed on Waxx
      </h1>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '15px', margin: 0, padding: 0 }}>
          <li style={navItemStyle('home')} onClick={() => setCurrentPage('home')}>
            Home
          </li>
          <li style={navItemStyle('services')} onClick={() => setCurrentPage('services')}>
            Services
          </li>
          
          {isLoggedIn ? (
            <li 
              style={{ ...navItemStyle('logout'), color: '#e63946' }} 
              onClick={() => { setIsLoggedIn(false); setCurrentPage('home'); }}
            >
              Logout
            </li>
          ) : (
            <>
              <li style={navItemStyle('login')} onClick={() => setCurrentPage('login')}>
                Login
              </li>
              <li style={navItemStyle('register')} onClick={() => setCurrentPage('register')}>
                Register
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;