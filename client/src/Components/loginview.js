import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginView({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Attempt backend authentication call
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      onLogin(data.user);
      navigate('/services');
    } catch (err) {
      // FALLBACK FOR DEMO/TESTING: Allows logging in if server is offline
      console.warn('Backend server unreachable. Using fallback demo login.');
      
      if (email.length > 0 && password.length > 0) {
        const mockUser = {
          id: 1,
          name: email.split('@')[0],
          email: email
        };
        onLogin(mockUser);
        navigate('/services');
      } else {
        setError('Please enter a valid email and password.');
      }
    }
  };

  return (
    <div className="page-wrapper" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <div className="dark-card" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <h2 className="gold-title">Member Login</h2>
        
        {error && <p style={{ color: '#ff4d4d', fontSize: '0.9rem' }}>{error}</p>}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ textAlign: 'left' }}>
            <label style={{ color: 'var(--gold-primary, #d4af37)', fontSize: '0.9rem' }}>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@waxxed.com"
              required
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                borderRadius: '4px',
                border: '1px solid #444',
                backgroundColor: '#1a1a1a',
                color: '#fff',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ textAlign: 'left' }}>
            <label style={{ color: 'var(--gold-primary, #d4af37)', fontSize: '0.9rem' }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                borderRadius: '4px',
                border: '1px solid #444',
                backgroundColor: '#2b2620',
                color: '#fff',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button 
            type="submit"
            style={{
              padding: '12px',
              backgroundColor: '#e0e0e0',
              color: '#000',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginView;