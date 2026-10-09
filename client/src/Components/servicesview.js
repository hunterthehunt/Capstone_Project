import React, { useState, useEffect } from 'react';

// Replace with your exact image path if located in src/images/ or src/assets/
import bannerImg from '../images/vinylbanner.png';

function ServicesView({ user }) {
  const [services, setServices] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [orderSummary, setOrderSummary] = useState([]);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load available services from MongoDB on component mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const API_URL = process.env.REACT_APP_API_URL;
        //const response = await fetch('http://localhost:5000/api/services');
        const response = await fetch(`${API_URL}/api/services`);
        if (!response.ok) {
          throw new Error('Failed to load services from server.');
        }
        const data = await response.json();
        setServices(data);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleQuantityChange = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const handleAddOption = (service) => {
    const serviceId = service._id || service.id;
    const qty = quantities[serviceId] || 0;
    if (qty <= 0) return;

    const title = service.serviceName || service.name || 'Lab Service';
    const cost = Number(service.price ?? service.basePrice ?? 0);

    setOrderSummary(prev => {
      const existingIndex = prev.findIndex(item => (item._id || item.id) === serviceId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity = qty;
        return updated;
      }
      return [...prev, { ...service, name: title, price: cost, quantity: qty }];
    });
  };

  const handleClearCart = () => {
    setOrderSummary([]);
    setQuantities({});
    setOrderSubmitted(false);
  };

  const calculateTotal = () => {
    return orderSummary.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
  };

  const handleSubmitOrder = async () => {
    if (orderSummary.length === 0 || !user) return;

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id || user._id || user.email,
          items: orderSummary,
          total: calculateTotal()
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setOrderSubmitted(true);
        handleClearCart();
      } else {
        alert(data.message || 'Failed to send order to database.');
      }
    } catch (err) {
      console.error('Database connection error:', err);
      alert('Server connection error. Ensure your backend server is running on port 5000.');
    }
  };

  return (
    <div className="page-wrapper" style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* Hero Banner Image Container */}
      <div style={{ width: '100%', maxHeight: '250px', overflow: 'hidden', borderRadius: '8px', marginBottom: '25px', border: '1px solid #333' }}>
        <img 
          src={bannerImg} 
          alt="Vinyl Restoration Lab" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      <h2 className="gold-title" style={{ color: 'var(--gold-primary, #d4af37)', textAlign: 'center', marginBottom: '10px' }}>
        Lab Services
      </h2>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '30px' }}>
        {user ? `Welcome back! Select your restoration services below.` : 'Please log in to submit service requests.'}
      </p>

      {orderSubmitted && (
        <div style={{ padding: '15px', backgroundColor: '#1b3a24', color: '#4caf50', borderRadius: '6px', marginBottom: '20px', textAlign: 'center' }}>
          Order submitted successfully to the database!
        </div>
      )}

      {/* Loading & Error Indicators */}
      {loading && <p style={{ textAlign: 'center', color: '#ccc' }}>Loading services from database...</p>}
      {error && <p style={{ textAlign: 'center', color: '#ff4d4d' }}>{error}</p>}

      {/* Services List loaded dynamically from MongoDB */}
      {!loading && !error && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {services.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#888' }}>No services available at this time.</p>
          ) : (
            services.map((service) => {
              const serviceId = service._id || service.id;
              const title = service.serviceName || service.name || 'Lab Service';
              const cost = Number(service.price ?? service.basePrice ?? 0);

              return (
                <div key={serviceId} className="dark-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderRadius: '8px', backgroundColor: '#181818', border: '1px solid #282828' }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: 'var(--gold-primary, #d4af37)', margin: '0 0 5px 0' }}>{title}</h4>
                    <p style={{ color: '#aaa', fontSize: '0.9rem', margin: '0 0 8px 0' }}>{service.description || service.desc}</p>
                    <span style={{ color: '#fff', fontWeight: 'bold' }}>
                      ${cost.toFixed(2)}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button onClick={() => handleQuantityChange(serviceId, -1)} style={{ padding: '5px 12px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>-</button>
                    <span style={{ color: '#fff', minWidth: '20px', textAlign: 'center' }}>{quantities[serviceId] || 0}</span>
                    <button onClick={() => handleQuantityChange(serviceId, 1)} style={{ padding: '5px 12px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>+</button>
                    <button onClick={() => handleAddOption(service)} style={{ marginLeft: '10px', padding: '6px 14px', backgroundColor: '#333', color: 'var(--gold-primary, #d4af37)', border: '1px solid #444', borderRadius: '4px', cursor: 'pointer' }}>Add Option</button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Selected Order Summary Panel */}
      {orderSummary.length > 0 && (
        <div className="dark-card" style={{ marginTop: '30px', padding: '20px', borderRadius: '8px', backgroundColor: '#181818', border: '1px solid #333' }}>
          <h3 style={{ color: 'var(--gold-primary, #d4af37)', marginBottom: '15px' }}>Selected Order Summary</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 15px 0' }}>
            {orderSummary.map((item, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #222', color: '#fff' }}>
                <span>{item.name} (x{item.quantity})</span>
                <span style={{ color: 'var(--gold-primary, #d4af37)' }}>${(Number(item.price) * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '20px', color: '#fff' }}>
            <span>Total:</span>
            <span style={{ color: 'var(--gold-primary, #d4af37)' }}>${calculateTotal().toFixed(2)}</span>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button type="button" onClick={handleClearCart} style={{ padding: '10px 18px', backgroundColor: '#2a2a2a', color: '#e0e0e0', border: '1px solid #444', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}>
              Clear Cart
            </button>
            <button type="button" onClick={handleSubmitOrder} disabled={!user} style={{ padding: '10px 18px', backgroundColor: user ? 'var(--gold-primary, #d4af37)' : '#444', color: user ? '#000' : '#888', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: user ? 'pointer' : 'not-allowed' }}>
              {user ? 'Submit Order' : 'Log In to Submit'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesView;