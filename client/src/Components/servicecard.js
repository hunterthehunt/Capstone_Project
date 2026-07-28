import React, { useState } from 'react';

function ServiceCard({ service }) {
  const [selectedTier, setSelectedTier] = useState(service.tiers[0]);
  const [albumNotes, setAlbumNotes] = useState('');

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    const orderObject = {
      serviceId: service.id,
      serviceTitle: service.title,
      selectedTierLabel: selectedTier.label,
      price: selectedTier.price,
      notes: albumNotes || 'None',
      submittedAt: new Date().toLocaleTimeString()
    };

    console.log("Submitted Service Order Object:", orderObject);
    alert(`Service Order Object Submitted:\n\n${JSON.stringify(orderObject, null, 2)}`);

    setAlbumNotes('');
  };

  return (
    <div className="service-card">
      <h3 className="service-card-title">
        {service.title}
      </h3>
      <p className="service-card-desc">
        {service.description}
      </p>

      <form onSubmit={handleOrderSubmit}>
        <div className="form-group">
          <label className="form-label-gold">
            Select Batch Volume:
          </label>
          <select 
            onChange={(e) => setSelectedTier(service.tiers[e.target.value])}
            className="form-input-dark"
          >
            {service.tiers.map((tier, index) => (
              <option key={index} value={index}>
                {tier.label} - ${tier.price}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group-lg">
          <label className="form-label-gold">
            Album Titles / Special Notes:
          </label>
          <input 
            type="text" 
            value={albumNotes} 
            onChange={(e) => setAlbumNotes(e.target.value)}
            placeholder="e.g., Kind of Blue, Abbey Road" 
            className="form-input-dark"
          />
        </div>

        <div className="price-row">
          <span className="price-label">Est. Cost:</span>
          <span className="price-value">
            ${selectedTier.price}
          </span>
        </div>

        <button type="submit" className="btn-gold">
          Book Restoration
        </button>
      </form>
    </div>
  );
}

export default ServiceCard;