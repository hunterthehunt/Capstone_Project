import React from 'react';

function HomeView({ user }) {
  return (
    <div className="page-wrapper">
      <div className="dark-card">
        <h1 className="gold-title" style={{ margin: 0, fontSize: '2rem' }}>WAXXED ON WAX</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
          Grant Park's Premier Vinyl Restoration & Care Lab
        </p>
      </div>

      <div className="dark-card" style={{ textAlign: 'left' }}>
        <h3 style={{ color: '#fff', marginTop: 0 }}>About Our Shop</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Proudly serving the historic <strong>Grant Park</strong> neighborhood for over 5 years, <strong>Waxxed on Wax</strong> is an up-and-coming vinyl restoration sanctuary. Whether you're looking to eliminate surface static, lift deep-groove dust, or revive rare vintage pressings, our lab delivers meticulous analog care so your collection plays exactly the way the artist intended.
        </p>
      </div>

      <div className="dark-card">
        <h2 className="gold-title" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
          Built by Collectors, for Collectors
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.5' }}>
          Whether you need a single record revived or an entire crate restored, we treat every groove with precision care. Waxxed on Wax is more than a service—it's a sanctuary for analog sound enthusiasts.
        </p>
      </div>

      <div className="dark-card" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h2 className="gold-title" style={{ margin: 0 }}>100+</h2>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Records Saved</span>
        </div>
        <div>
          <h2 className="gold-title" style={{ margin: 0 }}>24–48hr</h2>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Turnaround</span>
        </div>
        <div>
          <h2 className="gold-title" style={{ margin: 0 }}>100%</h2>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Analog Care</span>
        </div>
      </div>
    </div>
  );
}

export default HomeView;