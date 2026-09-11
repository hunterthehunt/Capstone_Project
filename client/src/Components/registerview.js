import React, { useState } from 'react';

function RegisterView({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Perform registration logic here
    console.log('Registering user:', formData);
  };

  return (
    <div className="page-wrapper" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh', 
      padding: '20px' 
    }}>
      <div className="dark-card" style={{ 
        width: '100%', 
        maxWidth: '420px', 
        padding: '30px', 
        backgroundColor: '#181818', 
        border: '1px solid #333', 
        borderRadius: '8px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)' 
      }}>
        <h2 style={{ 
          color: 'var(--gold-primary, #d4af37)', 
          textAlign: 'center', 
          marginBottom: '20px' 
        }}>
          Join the Vinyl Club
        </h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', color: '#ccc', marginBottom: '5px' }}>Full Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="e.g. Miles Davis" 
              value={formData.name} 
              onChange={handleChange} 
              style={{ 
                width: '100%', 
                padding: '10px', 
                backgroundColor: '#222', 
                border: '1px solid #444', 
                color: '#fff', 
                borderRadius: '4px' 
              }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#ccc', marginBottom: '5px' }}>Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="collector@waxxed.com" 
              value={formData.email} 
              onChange={handleChange} 
              style={{ 
                width: '100%', 
                padding: '10px', 
                backgroundColor: '#222', 
                border: '1px solid #444', 
                color: '#fff', 
                borderRadius: '4px' 
              }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#ccc', marginBottom: '5px' }}>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="••••••••" 
              value={formData.password} 
              onChange={handleChange} 
              style={{ 
                width: '100%', 
                padding: '10px', 
                backgroundColor: '#222', 
                border: '1px solid #444', 
                color: '#fff', 
                borderRadius: '4px' 
              }} 
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#ccc', marginBottom: '5px' }}>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="••••••••" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              style={{ 
                width: '100%', 
                padding: '10px', 
                backgroundColor: '#222', 
                border: '1px solid #444', 
                color: '#fff', 
                borderRadius: '4px' 
              }} 
            />
          </div>

          <button 
            type="submit" 
            style={{ 
              marginTop: '10px', 
              padding: '12px', 
              backgroundColor: 'var(--gold-primary, #d4af37)', 
              color: '#000', 
              border: 'none', 
              borderRadius: '4px', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}
          >
            Create Account
          </button>
        </form>

        <p style={{ textAlign: 'center', color: '#888', marginTop: '20px' }}>
          Already a member?{' '}
          <span 
            onClick={() => onNavigate && onNavigate('login')} 
            style={{ color: 'var(--gold-primary, #d4af37)', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Log in here
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterView;