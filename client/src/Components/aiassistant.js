import React, { useState } from 'react';

function AIAssistant() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('http://localhost:5000/api/services');
      const data = await res.json();

      const q = query.toLowerCase();

      if (q.includes('service') || q.includes('clean') || q.includes('wash') || q.includes('what') || q.includes('offer')) {
        if (Array.isArray(data) && data.length > 0) {
          // Checks serviceName (camelCase) to match your MongoDB schema
          const serviceNames = data
            .map(s => s.serviceName || s.service_name || s.title || s.name || 'Unnamed Service')
            .join(', ');
          
          setResponse(`We offer the following specialized services: ${serviceNames}.`);
        } else {
          setResponse(
            'We offer three specialized restoration services: Deep Washing (1–5 Vinyls), Deep Washing (6+ Vinyls), and Premier Restoration.'
          );
        }
      } else if (q.includes('price') || q.includes('cost') || q.includes('how much')) {
        setResponse('Our services range from $25 for small batch deep washing up to $60 for premier multi-stage restoration.');
      } else {
        setResponse(
          `Thanks for reaching out! Regarding "${query}": We specialize in professional vinyl record cleaning, deep-groove ultrasonic washing, and custom restoration services.`
        );
      }
    } catch (err) {
      setResponse(
        'We offer three specialized restoration services: Deep Washing (1–5 Vinyls), Deep Washing (6+ Vinyls), and Premier Restoration.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '20px auto',
      padding: '0 20px',
      textAlign: 'center'
    }}>
      <form onSubmit={handleAsk} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask AI Assistant (e.g. What services do you offer?)..."
          style={{
            flex: 1,
            padding: '12px 16px',
            backgroundColor: '#1f1f1f',
            border: '1px solid #333',
            borderRadius: '6px',
            color: '#fff',
            fontSize: '0.95rem'
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '12px 24px',
            backgroundColor: 'var(--gold-primary, #d4af37)',
            color: '#000',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Thinking...' : 'Ask AI'}
        </button>
      </form>

      {response && (
        <div style={{
          marginTop: '15px',
          padding: '15px 20px',
          backgroundColor: '#181818',
          border: '1px solid #333',
          borderRadius: '6px',
          textAlign: 'left',
          color: '#ccc',
          fontSize: '0.95rem',
          lineHeight: '1.5',
          position: 'relative',
          paddingRight: '45px'
        }}>
          <strong style={{ color: '#d4af37' }}>AI Assistant: </strong>
          {response}

          <button
            onClick={() => setResponse('')}
            title="Close response"
            style={{
              position: 'absolute',
              top: '12px',
              right: '15px',
              background: 'none',
              border: 'none',
              color: '#888',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              lineHeight: '1'
            }}
            onMouseOver={(e) => e.target.style.color = '#d4af37'}
            onMouseOut={(e) => e.target.style.color = '#888'}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default AIAssistant;