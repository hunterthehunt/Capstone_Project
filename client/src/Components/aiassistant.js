import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const AIAssistant = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAskAI = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse(''); // Clear previous response

    try {

      // const res = await fetch('http://localhost:5000/api/ai/ask', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ prompt }),
      // });
      const API_URL = process.env.REACT_APP_API_URL;
      const res = await fetch(`${API_URL}/api/ai/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch AI response');
      }

      setResponse(data.answer);
    } catch (err) {
      console.error('AI Search Error:', err);
      setResponse('Error: Unable to connect to AI Assistant. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '10px' }}>
      <form onSubmit={handleAskAI} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask AI Assistant (e.g. What services do you offer?)..."
          style={{
            flex: '1',
            padding: '10px 14px',
            borderRadius: '4px',
            border: '1px solid #444',
            backgroundColor: '#1e1e1e',
            color: '#fff',
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#d4af37',
            color: '#000',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Thinking...' : 'Ask AI'}
        </button>
      </form>

      {/* AI Response Display Area */}
      {response && (
        <div
          style={{
            marginTop: '15px',
            padding: '15px',
            backgroundColor: '#2a2a2a',
            borderLeft: '4px solid #d4af37',
            borderRadius: '4px',
            color: '#eee',
            lineHeight: '1.6',
            whiteSpace: 'pre-wrap', // Keeps paragraph spacing clean
          }}
        >
          <strong style={{ color: '#d4af37' }}>AI Assistant:</strong>
          <div style={{ marginTop: '8px' }}>
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;