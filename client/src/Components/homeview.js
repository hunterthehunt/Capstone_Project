import React from 'react';

function HomeView() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '65vh',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#181818',
        border: '1px solid #333',
        borderRadius: '8px',
        padding: '40px',
        maxWidth: '650px',
        width: '100%',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: 'var(--gold-primary, #d4af37)',
          fontSize: '2rem',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          Welcome to Waxxed on Wax
        </h1>

        <p style={{
          color: '#ccc',
          fontSize: '1.05rem',
          lineHeight: '1.6',
          marginBottom: '25px'
        }}>
          A vinyl collector's safe haven. Members can interact, explore vinyl record collections from our catalog, and request specialized restoration services for vintage vinyl pressings.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '15px',
          marginTop: '30px',
          textAlign: 'left'
        }}>
          <div style={{
            backgroundColor: '#222',
            padding: '15px',
            borderRadius: '6px',
            border: '1px solid #2a2a2a'
          }}>
            <h3 style={{ color: '#d4af37', marginTop: 0, fontSize: '1.1rem' }}>Vinyl Catalog</h3>
            <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0 }}>
              Browse through curated vinyl albums and record collections.
            </p>
          </div>

          <div style={{
            backgroundColor: '#222',
            padding: '15px',
            borderRadius: '6px',
            border: '1px solid #2a2a2a'
          }}>
            <h3 style={{ color: '#d4af37', marginTop: 0, fontSize: '1.1rem' }}>Restoration Services</h3>
            <p style={{ color: '#aaa', fontSize: '0.9rem', margin: 0 }}>
              Professional ultrasonic cleaning and deep groove maintenance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeView;