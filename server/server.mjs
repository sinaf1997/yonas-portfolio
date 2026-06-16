import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for messages (temporary)
const messages = [];

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio Backend API',
    endpoints: {
      'GET /api/health': 'Health check',
      'POST /api/contact': 'Submit contact form',
      'GET /api/messages': 'Get all messages (for admin)'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact form submission endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields (name, email, message) are required'
      });
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Store message
    const newMessage = {
      id: messages.length + 1,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      read: false
    };

    messages.push(newMessage);

    console.log('📨 New message received:');
    console.log(`   From: ${newMessage.name} (${newMessage.email})`);
    console.log(`   Message: ${newMessage.message.substring(0, 50)}...`);
    console.log(`   Time: ${newMessage.timestamp}`);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: {
        id: newMessage.id,
        timestamp: newMessage.timestamp
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      error: 'Server error. Please try again later.'
    });
  }
});

// Get all messages (for admin purposes)
app.get('/api/messages', (req, res) => {
  res.json({
    success: true,
    count: messages.length,
    messages: messages.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  });
});

// Delete a message by ID
app.delete('/api/messages/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = messages.findIndex(m => m.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: 'Message not found'
    });
  }

  messages.splice(index, 1);
  res.json({
    success: true,
    message: 'Message deleted successfully'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints:`);
  console.log(`   - GET  http://localhost:${PORT}/api/health`);
  console.log(`   - POST http://localhost:${PORT}/api/contact`);
  console.log(`   - GET  http://localhost:${PORT}/api/messages`);
});
