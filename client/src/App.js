import React, { useState } from 'react';
import AIAssistant from './Components/aiassistant';
import HomeView from './Components/homeview';
import ServicesView from './Components/servicesview';
import LoginView from './Components/loginview';
import RegisterView from './Components/registerview';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [user, setUser] = useState(null);

  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      {/* Navigation Bar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 30px',
        backgroundColor: '#181818',
        borderBottom: '1px solid #333'
      }}>
        <div 
          onClick={() => setCurrentView('home')} 
          style={{ fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--gold-primary, #d4af37)', cursor: 'pointer' }}
        >
          WAXXED ON WAX
        </div>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span 
            onClick={() => setCurrentView('home')} 
            style={{ cursor: 'pointer', color: currentView === 'home' ? '#d4af37' : '#ccc' }}
          >
            Home
          </span>

          <span 
            onClick={() => setCurrentView('services')} 
            style={{ cursor: 'pointer', color: currentView === 'services' ? '#d4af37' : '#ccc' }}
          >
            Services
          </span>

          {!user ? (
            <>
              <span 
                onClick={() => setCurrentView('login')} 
                style={{ cursor: 'pointer', color: currentView === 'login' ? '#d4af37' : '#ccc' }}
              >
                Login
              </span>
              <button 
                onClick={() => setCurrentView('register')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--gold-primary, #d4af37)',
                  color: '#000',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Register
              </button>
            </>
          ) : (
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <span style={{ color: '#aaa', fontSize: '0.9rem' }}>{user.email}</span>
              <button 
                onClick={() => setUser(null)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#333',
                  color: '#fff',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* AI Assistant Search Bar */}
      <AIAssistant />

      {/* Main Views */}
      <main style={{ padding: '20px' }}>
        {currentView === 'home' && <HomeView />}
        {currentView === 'services' && <ServicesView user={user} />}
        {currentView === 'login' && <LoginView onNavigate={setCurrentView} setUser={setUser} />}
        {currentView === 'register' && <RegisterView onNavigate={setCurrentView} />}
      </main>
    </div>
  );
}

export default App;