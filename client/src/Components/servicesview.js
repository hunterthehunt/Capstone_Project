import React from 'react';
// Steps up from Components -> src -> client to reach Capstone_Project/images/
import vinylBanner from '../../../images/vinylbanner.png';

function ServicesView({ user }) {
  const servicesList = [
    {
      id: 1,
      title: 'Monthly Record Club',
      description: 'Receive a curated vinyl record delivered to your door every month based on your preference profile.',
      price: '$29.99 / mo'
    },
    {
      id: 2,
      title: 'Vinyl Care & Cleaning Kit',
      description: 'Premium anti-static brush, cleaning solution, and microfiber cloth to keep your collection pristine.',
      price: '$19.99'
    },
    {
      id: 3,
      title: 'Custom Listening Station Setup',
      description: 'Consultation and setup support for turntables, pre-amps, and speaker placement.',
      price: '$49.99'
    }
  ];

  return (
    <div className="services-container" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Banner Image */}
      <div className="banner-container" style={{ marginBottom: '30px', textAlign: 'center' }}>
        <img 
          src={vinylBanner} 
          alt="Vinyl Banner" 
          style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '8px' }} 
        />
      </div>

      {/* Header */}
      <div className="services-header" style={{ marginBottom: '20px' }}>
        <h2>Vinyl Club Services</h2>
        {user && <p>Welcome back, <strong>{user.name || user.username || 'Member'}</strong>!</p>}
      </div>

      {/* Services Grid */}
      <div 
        className="services-grid" 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px' 
        }}
      >
        {servicesList.map((service) => (
          <div 
            key={service.id} 
            className="service-card" 
            style={{ 
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              padding: '20px', 
              backgroundColor: '#fff',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          >
            <h3>{service.title}</h3>
            <p style={{ minHeight: '60px', color: '#555' }}>{service.description}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.1em', color: '#007bff' }}>{service.price}</p>
            <button 
              style={{
                padding: '10px 15px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Select Service
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesView;