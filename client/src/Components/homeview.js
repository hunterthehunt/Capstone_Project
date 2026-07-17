import React from 'react';

function HomeView() {
  return (
    <div>
      <section style={{ textAlign: 'center', padding: '3rem 1rem', background: 'radial-gradient(circle, #1a1a22 0%, #121214 70%)', borderRadius: '8px', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2.2rem', color: '#d4af37', textTransform: 'uppercase', marginBottom: '1rem' }}>The Crate Digger's Sanctuary</h2>
        <p style={{ maxWidth: '750px', margin: '0 auto', color: '#a69c8a', fontFamily: 'sans-serif' }}>
          Step out of the digital noise and into the warm tracking of vintage analog setups. We preserve sonic fidelity.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem' }}>
        <section>
          <h3 style={{ color: '#d4af37', textTransform: 'uppercase', marginBottom: '1rem' }}>Crate Digging History</h3>
          <p>Waxxed on Waxx began in smoky backrooms where collectors met to trade rare pressings and preserve classic sonic signal paths.</p>
        </section>
        <aside style={{ background: '#1c1c21', padding: '1.5rem', borderLeft: '4px solid #5c1d24' }}>
          <h4 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>Club Pillars</h4>
          <p style={{ fontSize: '0.9rem', fontFamily: 'sans-serif' }}>• Pure Signal Tracking<br />• Precision Preservation<br />• Acoustic Integrity</p>
        </aside>
      </div>
    </div>
  );
}

export default HomeView;