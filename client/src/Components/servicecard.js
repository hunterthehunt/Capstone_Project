import React from 'react';

function ServiceCard({ service }) {
  // Guard check: prevents runtime errors if data is still loading
  if (!service) {
    return null;
  }

  return (
    <div className="card">
      <h3>{service.serviceName}</h3>
      <p>{service.description}</p>
      <div className="card-details">
        <p><strong>Price:</strong> ${service.basePrice}</p>
        <p><strong>Turnaround:</strong> {service.turnaroundDays} Days</p>
      </div>
    </div>
  );
}

export default ServiceCard;