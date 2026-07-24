import React, { useState } from 'react';

function RegisterView({ setCurrentPage, setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Submitted Member Registration Object:", formData);
    alert(`Member Registration Object Submitted:\n\n${JSON.stringify(formData, null, 2)}`);

    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '65vh' }}>
      <div className="form-card">
        <h2 className="form-title">Join the Vinyl Club</h2>
        
        {/* MEMBER FORM 1: Registration */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              className="form-input" 
              required 
              value={formData.fullName} 
              onChange={handleChange} 
              placeholder="Miles Davis" 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              name="email" 
              className="form-input" 
              required 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="collector@waxxed.com" 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              name="password" 
              className="form-input" 
              required 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="••••••••" 
            />
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              className="form-input" 
              required 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              placeholder="••••••••" 
            />
          </div>

          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </form>

        <p onClick={() => setCurrentPage('login')} className="form-link">
          Already a member? Log in here
        </p>
      </div>
    </div>
  );
}

export default RegisterView;