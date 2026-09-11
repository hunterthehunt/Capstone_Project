import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Navbar import
import Navbar from './Components/navbar';

// Lowercase imports matching the exact filenames on disk
import HomeView from './Components/homeview';
import ServicesView from './Components/servicesview';
import LoginView from './Components/loginview';
import RegisterView from './Components/registerview';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  // Load user session from localStorage on initial page load
  useEffect(() => {
    const savedUser = localStorage.getItem('appUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('appUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('appUser');
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar user={user} onLogout={handleLogout} />
        
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomeView user={user} />} />
            <Route path="/services" element={<ServicesView user={user} />} />
            <Route 
              path="/login" 
              element={user ? <Navigate to="/services" /> : <LoginView onLogin={handleLogin} />} 
            />
            <Route 
              path="/register" 
              element={user ? <Navigate to="/services" /> : <RegisterView onLogin={handleLogin} />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;