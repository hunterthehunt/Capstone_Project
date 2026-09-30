const express = require('express');
const axios = require('axios');
const router = express.Router();
const mongoose = require('mongoose');
const Anthropic = require('@anthropic-ai/sdk');

const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
});

const ServiceSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String
});

const Service = mongoose.models.Service || mongoose.model('Service', ServiceSchema, 'services');

// POST /api/ai/ask
router.post('/ask', async (req, res) => {
  try {
    let { prompt } = req.body; // Dynamic input from frontend input box
    const services = await Service.find();


    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required.' });
    }


    prompt = 
    `You are an assistant for finding a service. Let me know which service you have for user 
    Question of the user: ${req.body.prompt} 
    Available services is listes=d here as well ${JSON.stringify(services)}
    `
    console.log(prompt)

     let response = await axios.post ("https://api.anthropic.com/v1/messages", 
    { 
        model: "claude-sonnet-4-6", 
        max_tokens: 500, 
        messages: [ 
          { 
            role: "user", 
            content: prompt 
          } 
        ] 
      }, 
      { 
        headers: { 
          "x-api-key": process.env.CLAUDE_API_KEY, 
          "anthropic-version": "2023-06-01", 
          "content-type": "application/json" 
        } 
      } 
  )
  
    console.log(response.data.content[0].text)
    const reply = response.data.content[0].text;  
    console.log('AI Response:', reply);


    res.json({ answer: reply });
  } catch (error) {
    console.error('AI Route Error:', error);
    res.status(500).json({ message: 'Error processing AI query.' });
  }
});

module.exports = router;