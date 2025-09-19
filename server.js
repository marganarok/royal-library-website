const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Royal Library of Marganarok</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #111;
          color: #00ff41;
          text-align: center;
          padding: 50px;
        }
        h1 { color: #ff073a; }
      </style>
    </head>
    <body>
      <h1>🚀 Royal Library of Marganarok</h1>
      <p>Welcome to the sacred digital ministry platform.</p>
      <p>Express.js is running successfully!</p>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Express server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Royal Library server running on port ${PORT}`);
});