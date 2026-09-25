const express = require('express');
const router = express.Router();
const Anthropic = require('@anthropic-ai/sdk');

// Initialize Anthropic client using process.env.CLAUDE_API_KEY loaded by dotenv
const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

// POST /api/ai/ask
router.post('/ask', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required' });
    }

    // Call the Claude API
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 300,
      messages: [{ role: 'user', content: prompt }],
    });

    // Extract Claude's answer text
    const answer = response.content[0].text;

    res.status(200).json({ answer });
  } catch (error) {
    console.error('Claude API Error:', error.message);
    res.status(500).json({ 
      message: 'Error communicating with AI assistant.', 
      error: error.message 
    });
  }
});

module.exports = router;