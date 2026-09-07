import React, { useState, useEffect } from 'react';

function ServicesView() {
  const defaultServices = [
    {
      _id: '1',
      service_name: 'Deep Washing (1–5 Vinyls)',
      description: 'Ultrasonic and deep-groove cleaning for small batches. Eliminates surface noise, dust, and light smudges.',
      price: '$25',
      turnaround: '24–48 Hours'
    },
    {
      _id: '2',
      service_name: 'Deep Washing (6+ Vinyls)',
      description: 'Bulk deep cleaning for larger collections. Complete groove restoration with anti-static inner sleeve upgrades included.',
      price: '$45+',
      turnaround: '2–3 Days'
    },
    {
      _id: '3',
      service_name: 'Premier Restoration',
      description: 'Specialized intensive care for heavily soiled, mold-affected, or rare vintage pressings requiring multi-stage hand-restoration.',
      price: '$60',
      turnaround: '3–5 Days'
    }
  ];

  const [services, setServices] = useState(defaultServices);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('API offline');
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setServices(data);
        }
      })
      .catch(() => {});
  }, []);

  const handleQuantityChange = (id, value) => {
    const qty = Math.max(1, parseInt(value) || 1);
    setQuantities((prev) => ({ ...prev, [id]: qty }));
  };

  const handleBook = (service) => {
    const qty = quantities[service._id || service.service_name] || 1;
    alert(`Requested ${qty}x ${service.service_name}!`);
  };

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
        {services.map((service) => {
          const serviceId = service._id || service.service_name;
          const currentQty = quantities[serviceId] || 1;

          return (
            <div key={serviceId} className="tile-border service-tile">
              <h3 className="service-name">{service.service_name}</h3>
              <p className="service-desc">{service.description}</p>
              
              <div className="service-details">
                <span className="service-price">
                  Price: {formatPrice(service.price)}
                </span>
                <span className="service-time">
                  Turnaround: {service.turnaround || 'Standard'}
                </span>
              </div>

              <div className="booking-actions" style={{ marginTop: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <label style={{ color: '#d4af37', fontWeight: 'bold' }}>Qty:</label>
                <input
                  type="number"
                  min="1"
                  value={currentQty}
                  onChange={(e) => handleQuantityChange(serviceId, e.target.value)}
                  style={{
                    width: '60px',
                    padding: '6px',
                    backgroundColor: '#221e1a',
                    border: '1px solid #443c33',
                    color: '#e0d6c3',
                    borderRadius: '4px'
                  }}
                />
                <button
                  onClick={() => handleBook(service)}
                  className="nav-btn"
                  style={{ flexGrow: 1, padding: '8px 12px' }}
                >
                  Book Service
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesView;