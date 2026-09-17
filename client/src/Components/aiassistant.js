import React, { useState } from 'react';

function AIAssistant() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAI = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');

    try {
      // Fetch live services from your MongoDB backend endpoint
      const res = await fetch('http://localhost:5000/api/services');
      const services = await res.json();
      
      const serviceList = services.map(s => s.name).join(', ');
      const lowerQuery = query.toLowerCase();

      if (lowerQuery.includes('cd') || lowerQuery.includes('disc') || lowerQuery.includes('dvd')) {
        setResponse(`No, we currently do not offer CD or disc cleaning services. However, here are the restoration services we execute at Waxxed on Wax: ${serviceList}.`);
      } else {
        setResponse(`Welcome to Waxxed on Wax AI Assistant! Based on our database, we offer the following specialized services: ${serviceList}.`);
      }
    } catch (err) {
      console.error('AI Search Error:', err);
      setResponse('Unable to connect to service database. Please ensure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#111', padding: '15px 20px', borderBottom: '1px solid #333' }}>
      <form onSubmit={handleAskAI} style={{ display: 'flex', gap: '10px', maxWidth: '900px', margin: '0 auto' }}>
        <input 
          type="text" 
          placeholder="Ask AI Assistant (e.g. Do you clean CDs?)..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1, padding: '10px', backgroundColor: '#222', border: '1px solid #444', color: '#fff', borderRadius: '4px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'var(--gold-primary, #d4af37)', color: '#000', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
          {loading ? 'Searching DB...' : 'Ask AI'}
        </button>
      </form>
      {response && (
        <div style={{ maxWidth: '900px', margin: '10px auto 0', color: '#d4af37', fontSize: '0.95rem', backgroundColor: '#181818', padding: '10px', borderRadius: '4px', border: '1px solid #333' }}>
          <strong>AI Assistant:</strong> {response}
        </div>
      )}
    </div>
  );
}

export default AIAssistant;