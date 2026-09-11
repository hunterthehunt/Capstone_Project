import React, { useState } from 'react';
import vinylBanner from '../images/vinylbanner.png';

function ServicesView({ user }) {
  const [quantities, setQuantities] = useState({ 1: 0, 2: 0, 3: 0 });
  const [orderSummary, setOrderSummary] = useState([]);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const servicesList = [
    {
      id: 1,
      title: 'Deep-Groove Ultrasonic Wash',
      description: 'Lifts deep dirt, micro-dust, and static for crystal-clear playback.',
      price: 15.00
    },
    {
      id: 2,
      title: 'Vintage Record Restoration',
      description: 'Hand-cleaning paired with scratch reduction and anti-static sleeve replacement.',
      price: 25.00
    },
    {
      id: 3,
      title: 'Monthly Vinyl Club Membership',
      description: 'Exclusive member perks, curated monthly restored vinyl, and priority lab booking.',
      price: 29.99
    }
  ];

  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));
  };

  // Adds or updates item quantity in the overall order summary
  const handleAddService = (service) => {
    const qty = quantities[service.id];
    if (qty === 0) return;

    setOrderSummary((prev) => {
      const existing = prev.find((item) => item.id === service.id);
      if (existing) {
        return prev.map((item) =>
          item.id === service.id ? { ...item, quantity: qty } : item
        );
      }
      return [...prev, { ...service, quantity: qty }];
    });
    setOrderSubmitted(false);
  };

  // Total order cost calculation
  const calculateTotal = () => {
    return orderSummary.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  // Final order submission handler
  const handleSubmitOrder = () => {
    if (orderSummary.length === 0) return;
    setOrderSubmitted(true);
    setOrderSummary([]);
    setQuantities({ 1: 0, 2: 0, 3: 0 });
  };

  return (
    <div className="page-wrapper">
      <div className="dark-card" style={{ padding: 0, overflow: 'hidden' }}>
        <img 
          src={vinylBanner} 
          alt="Vinyl Banner" 
          style={{ width: '100%', maxHeight: '220px', objectFit: 'cover' }} 
        />
      </div>

      <div className="dark-card">
        <h2 className="gold-title" style={{ margin: 0 }}>Lab Services</h2>
        {user ? (
          <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>
            Logged in as: <strong>{user.email || user.name || 'Member'}</strong>
          </p>
        ) : (
          <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>
            Please log in to submit service requests.
          </p>
        )}
      </div>

      {/* Confirmation Banner */}
      {orderSubmitted && (
        <div className="dark-card" style={{ border: '1px solid #28a745', backgroundColor: '#132819' }}>
          <h3 style={{ color: '#28a745', margin: 0 }}>Order Submitted Successfully!</h3>
          <p style={{ color: 'var(--text-muted)', margin: '5px 0 0 0' }}>
            Your request has passed into the system. We will contact you shortly to confirm turnaround time.
          </p>
        </div>
      )}

      {/* Service Selection Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {servicesList.map((service) => (
          <div 
            key={service.id} 
            className="dark-card" 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              textAlign: 'left',
              gap: '20px' 
            }}
          >
            <div style={{ flex: 1 }}>
              <h3 className="gold-title" style={{ margin: '0 0 5px 0' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.95rem' }}>{service.description}</p>
              <p style={{ color: '#fff', fontWeight: 'bold', marginTop: '8px', margin: 0 }}>
                ${service.price.toFixed(2)}
              </p>
            </div>

            {/* Quantity Counter & Add Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button 
                  onClick={() => handleDecrement(service.id)}
                  style={{
                    padding: '5px 12px',
                    backgroundColor: '#333',
                    color: 'var(--gold-primary, #d4af37)',
                    border: '1px solid var(--gold-primary, #d4af37)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  -
                </button>
                <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center', color: '#fff' }}>
                  {quantities[service.id]}
                </span>
                <button 
                  onClick={() => handleIncrement(service.id)}
                  style={{
                    padding: '5px 12px',
                    backgroundColor: 'var(--gold-primary, #d4af37)',
                    color: '#000',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleAddService(service)}
                disabled={quantities[service.id] === 0}
                style={{
                  padding: '8px 14px',
                  backgroundColor: quantities[service.id] > 0 ? '#d4af37' : '#444',
                  color: quantities[service.id] > 0 ? '#000' : '#888',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: quantities[service.id] > 0 ? 'pointer' : 'not-allowed',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                Add Option
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Submission Panel */}
      {orderSummary.length > 0 && (
        <div className="dark-card" style={{ marginTop: '10px', textAlign: 'left' }}>
          <h3 className="gold-title" style={{ marginTop: 0 }}>Selected Order Summary</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-light)' }}>
            {orderSummary.map((item) => (
              <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #333' }}>
                <span>{item.title} (x{item.quantity})</span>
                <span style={{ color: 'var(--gold-primary, #d4af37)' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
            <h4 style={{ margin: 0, color: '#fff', fontSize: '1.2rem' }}>
              Total: <span style={{ color: 'var(--gold-primary, #d4af37)' }}>${calculateTotal()}</span>
            </h4>
            <button
              onClick={handleSubmitOrder}
              disabled={!user}
              style={{
                padding: '10px 20px',
                backgroundColor: user ? '#28a745' : '#555',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: user ? 'pointer' : 'not-allowed',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              {user ? 'Submit Order' : 'Log In to Submit'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesView;