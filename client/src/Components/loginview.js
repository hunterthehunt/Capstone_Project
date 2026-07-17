import React from 'react';

function LoginView({ setCurrentPage, setIsLoggedIn }) {
  const handleSubmission = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
      <div style={{ backgroundColor: '#ffffff', color: '#121214', padding: '2.5rem 2rem', borderRadius: '6px', maxWidth: '400px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.6)', borderTop: '5px solid #5c1d24' }}>
        <h2 style={{ textAlignment: 'center', marginBottom: '1.5rem', color: '#121214', textTransform: 'uppercase' }}>Lounge Access</h2>
        <form onSubmit={handleSubmission}>
          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Passkey Email</label>
            <input type="email" required style={{ width: '100%', padding: '0.75rem', background: '#f8f9fa', border: '1px solid #cccccc', color: '#121214' }} placeholder="collector@waxxed.com" />
          </div>
          <button type="submit" style={{ width: '100%', padding: '0.8rem', background: '#5c1d24', color: '#ffffff', border: '1px solid #d4af37', textTransform: 'uppercase', cursor: 'pointer' }}>
            Verify Passkey
          </button>
        </form>
        <p onClick={() => setCurrentPage('home')} style={{ color: '#666670', textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>
          ← Cancel and Turn Back
        </p>
      </div>
    </div>
  );
}

export default LoginView;