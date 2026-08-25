import React, { useState, useEffect } from 'react';

function ServicesView() {
  const defaultServices = [
    {
      id: '1',
      serviceName: 'Deep Washing (1–5 Vinyls)',
      description: 'Ultrasonic and deep-groove cleaning for small batches. Eliminates surface noise, dust, and light smudges.',
      price: '$25',
      turnaround: '24–48 Hours'
    },
    {
      id: '2',
      serviceName: 'Deep Washing (6+ Vinyls)',
      description: 'Bulk deep cleaning for larger collections. Complete groove restoration with anti-static inner sleeve upgrades included.',
      price: '$45+',
      turnaround: '2–3 Days'
    },
    {
      id: '3',
      serviceName: 'Premier Restoration',
      description: 'Specialized intensive care for heavily soiled, mold-affected, or rare vintage pressings requiring multi-stage hand-restoration.',
      price: '$60',
      turnaround: '3–5 Days'
    }
  ];

  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('API not available');
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setServices(data);
        }
      })
      .catch(() => {
        // Fallback silently to default static services if API is offline
      });
  }, []);

  // Safe helper function to format price strings or numbers
  const formatPrice = (price) => {
    if (price === undefined || price === null) return 'N/A';
    const priceStr = String(price);
    return priceStr.startsWith('$') ? priceStr : `$${priceStr}`;
  };

  return (
    <div className="home-container">
      <h2 className="section-title" style={{ textAlign: 'center', marginTop: '30px' }}>
        Vinyl Restoration Services
      </h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id || service._id || service.serviceName} className="tile-border service-tile">
            <h3 className="service-name">{service.serviceName}</h3>
            <p className="service-desc">{service.description}</p>
            <div className="service-details">
              <span className="service-price">
                Price: {formatPrice(service.price)}
              </span>
              <span className="service-time">
                Turnaround: {service.turnaround || 'Standard'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesView;