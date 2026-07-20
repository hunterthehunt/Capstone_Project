import React, { useState } from 'react';

function RegisterView({ setCurrentPage, setIsLoggedIn }) {
  // State object to hold all form input values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Handler to update form state on input change
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // Submit handler logging and displaying the object
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // 1. Log the submitted object to the browser console (Inspect Element)
    console.log("Submitted Registration Object:", formData);

    // 2. Display the submitted object in an on-screen alert box
    alert(`Registration Object Submitted:\n\n${JSON.stringify(formData, null, 2)}`);

    // Update login state and redirect home
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '65vh' }}>
      <div style={{ backgroundColor: '#ffffff', color: '#121214', padding: '2.5rem 2rem', borderRadius: '6px', maxWidth: '420px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.6)', borderTop: '5px solid #5c1d24' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#121214', textTransform: 'uppercase' }}>
          Join the Vinyl Club
        </h2>
        
        {/* FORM 1: Member Registration */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
              Full Name
            </label>
            <input 
              type="text" 
              name="fullName" 
              required 
              value={formData.fullName} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '0.75rem', background: '#f8f9fa', border: '1px solid #cccccc', color: '#121214', boxSizing: 'border-box' }} 
              placeholder="Miles Davis" 
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
              Email Address
            </label>
            <input 
              type="email" 
              name="email" 
              required 
              value={formData.email} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '0.75rem', background: '#f8f9fa', border: '1px solid #cccccc', color: '#121214', boxSizing: 'border-box' }} 
              placeholder="collector@waxxed.com" 
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
              Password
            </label>
            <input 
              type="password" 
              name="password" 
              required 
              value={formData.password} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '0.75rem', background: '#f8f9fa', border: '1px solid #cccccc', color: '#121214', boxSizing: 'border-box' }} 
              placeholder="••••••••" 
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
              Confirm Password
            </label>
            <input 
              type="password" 
              name="confirmPassword" 
              required 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              style={{ width: '100%', padding: '0.75rem', background: '#f8f9fa', border: '1px solid #cccccc', color: '#121214', boxSizing: 'border-box' }} 
              placeholder="••••••••" 
            />
          </div>

          <button type="submit" style={{ width: '100%', padding: '0.8rem', background: '#5c1d24', color: '#ffffff', border: '1px solid #d4af37', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 'bold' }}>
            Create Account
          </button>
        </form>

        <p onClick={() => setCurrentPage('login')} style={{ color: '#666670', textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>
          Already a member? Log in here
        </p>
      </div>
    </div>
  );
}

export default RegisterView;