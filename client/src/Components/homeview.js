import React, { useState, useEffect } from 'react';
import ServiceCard from './servicecard';

function HomeView() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server returned status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching services:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="center-container">Loading restoration services from server...</p>;
  }

  if (error) {
    return <p className="center-container" style={{ color: '#d9534f' }}>Error: {error}</p>;
  }

  return (
    <div className="home-container">
      {/* Hero Banner */}
      <section className="hero-banner tile-border">
        <h1 className="hero-title">WAXXED ON WAXX</h1>
        <p className="hero-subtitle">Grant Park’s Premier Vinyl Restoration & Care Lab</p>
      </section>

      {/* About Us Section */}
      <section className="about-section tile-border">
        <h2 className="section-title">About Our Shop</h2>
        <p className="about-text">
          Proudly serving the historic <strong>Grant Park</strong> neighborhood for over 5 years, 
          <strong> Waxxed on Waxx</strong> is an up-and-coming vinyl restoration sanctuary. 
          Whether you're looking to eliminate surface static, lift deep-groove dust, or revive rare vintage pressings, 
          our lab delivers meticulous analog care so your collection plays exactly the way the artist intended.
        </p>
      </section>

      {/* Restoration Services Section */}
      <section className="services-section tile-border">
        <h2 className="section-title">Vinyl Restoration Services</h2>

        {/* Services Table */}
        <div className="table-wrapper">
          <table className="services-table">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Turnaround</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id || service.serviceName}>
                  <td><strong>{service.serviceName}</strong></td>
                  <td>{service.description}</td>
                  <td>${service.basePrice}</td>
                  <td>{service.turnaroundDays} Days</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Service Cards Grid */}
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service._id || service.serviceName} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeView;