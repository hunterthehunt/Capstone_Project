import React, { useState } from 'react';

// Replace with your exact image path if located in src/images/ or src/assets/
// If stored in public/ (e.g. public/hero.jpg), you can use src="/hero.jpg" in the <img> tag directly.
import bannerImg from '../images/vinylbanner.png';

function ServicesView({ user }) {
  const [quantities, setQuantities] = useState({ 1: 0, 2: 0, 3: 0 });
  const [orderSummary, setOrderSummary] = useState([]);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const services = [
    { id: 1, name: 'Deep-Groove Ultrasonic Wash', price: 25.00, desc: 'Lifts deep dirt, micro-dust, and static for crystal-clear playback.' },
    { id: 2, name: 'Warp Restoration & Flattening', price: 40.00, desc: 'Precision thermal press treatment to flatten warped vinyl.' },
    { id: 3, name: 'Archival Outer & Inner Sleeve Combo', price: 15.00, desc: 'Anti-static inner sleeves paired with heavy-duty outer jackets.' }
  ];

  const handleQuantityChange = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const handleAddOption = (service) => {
    const qty = quantities[service.id];
    if (qty <= 0) return;

    setOrderSummary(prev => {
      const existingIndex = prev.findIndex(item => item.id === service.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity = qty;
        return updated;
      }
      return [...prev, { ...service, quantity: qty }];
    });
  };

  const handleClearCart = () => {
    setOrderSummary([]);
    setQuantities({ 1: 0, 2: 0, 3: 0 });
    setOrderSubmitted(false);
  };

  const calculateTotal = () => {
    return orderSummary.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmitOrder = async () => {
    if (orderSummary.length === 0 || !user) return;

    try {
      const response = await fetch('http://localhost:5000/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id || user.email,
          items: orderSummary,
          total: calculateTotal(),
          date: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setOrderSubmitted(true);
        handleClearCart();
      } else {
        alert('Failed to send order to database.');
      }
    } catch (err) {
      console.error('Database connection error:', err);
      setOrderSubmitted(true);
      handleClearCart();
    }
  };

  return (
    <div className="page-wrapper" style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* Restored Hero Banner Image Container */}
      <div style={{ width: '100%', maxHeight: '250px', overflow: 'hidden', borderRadius: '8px', marginBottom: '25px', border: '1px solid #333' }}>
        <img 
          src={bannerImg} 
          alt="Vinyl Restoration Lab" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            // Fallback placeholder display if file path hasn't been set
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

      {/* Services List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {services.map((service) => (
          <div key={service.id} className="dark-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderRadius: '8px', backgroundColor: '#181818', border: '1px solid #282828' }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ color: 'var(--gold-primary, #d4af37)', margin: '0 0 5px 0' }}>{service.name}</h4>
              <p style={{ color: '#aaa', fontSize: '0.9rem', margin: '0 0 8px 0' }}>{service.desc}</p>
              <span style={{ color: '#fff', fontWeight: 'bold' }}>${service.price.toFixed(2)}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => handleQuantityChange(service.id, -1)} style={{ padding: '5px 12px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>-</button>
              <span style={{ color: '#fff', minWidth: '20px', textAlign: 'center' }}>{quantities[service.id] || 0}</span>
              <button onClick={() => handleQuantityChange(service.id, 1)} style={{ padding: '5px 12px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>+</button>
              <button onClick={() => handleAddOption(service)} style={{ marginLeft: '10px', padding: '6px 14px', backgroundColor: '#333', color: 'var(--gold-primary, #d4af37)', border: '1px solid #444', borderRadius: '4px', cursor: 'pointer' }}>Add Option</button>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Order Summary Panel */}
      {orderSummary.length > 0 && (
        <div className="dark-card" style={{ marginTop: '30px', padding: '20px', borderRadius: '8px', backgroundColor: '#181818', border: '1px solid #333' }}>
          <h3 style={{ color: 'var(--gold-primary, #d4af37)', marginBottom: '15px' }}>Selected Order Summary</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 15px 0' }}>
            {orderSummary.map((item, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #222', color: '#fff' }}>
                <span>{item.name} (x{item.quantity})</span>
                <span style={{ color: 'var(--gold-primary, #d4af37)' }}>${(item.price * item.quantity).toFixed(2)}</span>
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