import React from 'react';

function HomeView() {
  return (
    <div className="home-container">
      {/* Hero Banner Section */}
      <header className="hero-banner tile-border">
        <h1 className="hero-title">WAXXED ON WAX</h1>
        <p className="hero-subtitle">Grant Park’s Premier Vinyl Restoration & Care Lab</p>
      </header>

      {/* About Section */}
      <section className="about-section tile-border">
        <h2 className="section-title">About Our Shop</h2>
        <p className="about-text">
          Proudly serving the historic <strong>Grant Park</strong> neighborhood for over 5 years, 
          <strong> Waxxed on Wax</strong> is an up-and-coming vinyl restoration sanctuary. 
          Whether you're looking to eliminate surface static, lift deep-groove dust, or revive 
          rare vintage pressings, our lab delivers meticulous analog care so your collection 
          plays exactly the way the artist intended.
        </p>
      </section>

      {/* Community Vibe & Why Join Section */}
      <section className="community-vibe tile-border">
        <div className="container">
          <h2>Built by Collectors, for Collectors</h2>
          <p className="vibe-subtitle">
            Whether you need a single record revived or an entire crate restored, we treat every groove with precision care. 
            Waxxed on Wax is more than a service—it's a sanctuary for analog sound enthusiasts.
          </p>
        </div>
      </section>

      {/* Quick Stats Counter Section */}
      <section className="stats-counter tile-border">
        <div className="container stats-grid">
          <div className="stat-card">
            <h3 className="stat-number">100+</h3>
            <p className="stat-label">Vinyls Restored</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">24–48hr</h3>
            <p className="stat-label">Average Turnaround</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">100%</h3>
            <p className="stat-label">Groove Care Guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeView;