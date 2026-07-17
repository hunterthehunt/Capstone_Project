import React, { useState } from 'react';

function ServiceCard({ service }) {
  const [selectedPrice, setSelectedPrice] = useState(service.tiers[0].price);

  return (
    <div style={{ background: '#1c1c21', padding: '1.5rem', borderTop: '4px solid #5c1d24', borderRadius: '4px', boxShadow: '5px 5px 15px rgba(0,0,0,0.5)' }}>
      <h3 style={{ color: '#f4ebd9', fontSize: '1.3rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
        {service.title}
      </h3>
      <p style={{ color: '#a69c8a', fontSize: '0.95rem', marginBottom: '1.5rem', fontFamily: 'sans-serif' }}>
        {service.description}
      </p>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', color: '#d4af37' }}>
          Select Batch Volume:
        </label>
        <select 
          onChange={(e) => setSelectedPrice(Number(e.target.value))}
          style={{ width: '100%', padding: '0.75rem', background: '#121214', color: '#f4ebd9', border: '1px solid #3e3e4a' }}
        >
          {service.tiers.map((tier, index) => (
            <option key={index} value={tier.price}>
              {tier.label}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #2d2d35', paddingTop: '1rem' }}>
        <span style={{ fontSize: '0.9rem', color: '#a69c8a' }}>Est. Cost:</span>
        <span style={{ fontSize: '1.6rem', color: '#d4af37', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
          ${selectedPrice}
        </span>
      </div>
    </div>
  );
}

export default ServiceCard;