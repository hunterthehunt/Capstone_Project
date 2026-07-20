import React, { useState } from 'react';

function ServiceCard({ service }) {
  // State to track tier selection and album notes
  const [selectedTier, setSelectedTier] = useState(service.tiers[0]);
  const [albumNotes, setAlbumNotes] = useState('');

  // Submit handler logging and displaying the order object
  const handleOrderSubmit = (e) => {
    e.preventDefault();

    // Construct submission object
    const orderObject = {
      serviceId: service.id,
      serviceTitle: service.title,
      selectedTierLabel: selectedTier.label,
      price: selectedTier.price,
      notes: albumNotes || 'None',
      submittedAt: new Date().toLocaleTimeString()
    };

    // 1. Log the submitted object to the browser console
    console.log("Submitted Service Order Object:", orderObject);

    // 2. Display the submitted object in an on-screen alert box
    alert(`Service Order Object Submitted:\n\n${JSON.stringify(orderObject, null, 2)}`);

    // Reset notes input
    setAlbumNotes('');
  };

  return (
    <div style={{ background: '#1c1c21', padding: '1.5rem', borderTop: '4px solid #5c1d24', borderRadius: '4px', boxShadow: '5px 5px 15px rgba(0,0,0,0.5)' }}>
      <h3 style={{ color: '#f4ebd9', fontSize: '1.3rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
        {service.title}
      </h3>
      <p style={{ color: '#a69c8a', fontSize: '0.95rem', marginBottom: '1.5rem', fontFamily: 'sans-serif' }}>
        {service.description}
      </p>

      {/* FORM 2: Service Booking Request */}
      <form onSubmit={handleOrderSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', color: '#d4af37' }}>
            Select Batch Volume:
          </label>
          <select 
            onChange={(e) => setSelectedTier(service.tiers[e.target.value])}
            style={{ width: '100%', padding: '0.75rem', background: '#121214', color: '#f4ebd9', border: '1px solid #3e3e4a', boxSizing: 'border-box' }}
          >
            {service.tiers.map((tier, index) => (
              <option key={index} value={index}>
                {tier.label} - ${tier.price}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', color: '#d4af37' }}>
            Album Titles / Special Notes:
          </label>
          <input 
            type="text" 
            value={albumNotes} 
            onChange={(e) => setAlbumNotes(e.target.value)}
            placeholder="e.g., Kind of Blue, Abbey Road" 
            style={{ width: '100%', padding: '0.6rem', background: '#121214', color: '#f4ebd9', border: '1px solid #3e3e4a', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #2d2d35', paddingTop: '1rem', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#a69c8a' }}>Est. Cost:</span>
          <span style={{ fontSize: '1.6rem', color: '#d4af37', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
            ${selectedTier.price}
          </span>
        </div>

        <button type="submit" style={{ width: '100%', padding: '0.75rem', background: '#d4af37', color: '#121214', border: 'none', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer' }}>
          Book Restoration
        </button>
      </form>
    </div>
  );
}

export default ServiceCard;