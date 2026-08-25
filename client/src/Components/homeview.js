import React from 'react';

function HomeView() {
  return (
    <div className="home-container">
      <header className="hero-banner tile-border">
        <h1 className="hero-title">WAXXED ON WAXX</h1>
        <p className="hero-subtitle">Grant Park’s Premier Vinyl Restoration & Care Lab</p>
      </header>

      <section className="about-section tile-border">
        <h2 className="section-title">About Our Shop</h2>
        <p className="about-text">
          Proudly serving the historic <strong>Grant Park</strong> neighborhood for over 5 years, 
          <strong> Waxxed on Waxx</strong> is an up-and-coming vinyl restoration sanctuary. 
          Whether you're looking to eliminate surface static, lift deep-groove dust, or revive 
          rare vintage pressings, our lab delivers meticulous analog care so your collection 
          plays exactly the way the artist intended.
        </p>
      </section>
    </div>
  );
}

export default HomeView;