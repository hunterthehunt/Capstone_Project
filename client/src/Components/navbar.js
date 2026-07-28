import React from 'react';

function Navbar({ currentPage, setCurrentPage, isLoggedIn, setIsLoggedIn }) {
  return (
    <header className="navbar-header">
      <h1 className="navbar-brand">
        Waxxed on Waxx
      </h1>
      <nav>
        <ul className="navbar-list">
          <li 
            className={currentPage === 'home' ? 'nav-item-active' : 'nav-item'} 
            onClick={() => setCurrentPage('home')}
          >
            Home
          </li>
          <li 
            className={currentPage === 'services' ? 'nav-item-active' : 'nav-item'} 
            onClick={() => setCurrentPage('services')}
          >
            Services
          </li>
          
          {isLoggedIn ? (
            <li 
              className="nav-item-logout" 
              onClick={() => { setIsLoggedIn(false); setCurrentPage('home'); }}
            >
              Logout
            </li>
          ) : (
            <>
              <li 
                className={currentPage === 'login' ? 'nav-item-active' : 'nav-item'} 
                onClick={() => setCurrentPage('login')}
              >
                Login
              </li>
              <li 
                className={currentPage === 'register' ? 'nav-item-active' : 'nav-item'} 
                onClick={() => setCurrentPage('register')}
              >
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