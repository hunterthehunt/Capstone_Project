import React, { useState, useEffect } from 'react';
import ServiceCard from './servicecard';

function HomeView() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Send GET request to backend on component mount
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
    return <p className="center-container" style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Vinyl Restoration Services</h1>

      {/* Services Table */}
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

      {/* Service Cards Grid */}
      <div className="card-grid">
        {services.map((service) => (
          <ServiceCard key={service._id || service.serviceName} service={service} />
        ))}
      </div>
    </div>
  );
}

export default HomeView;