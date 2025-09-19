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
      <link rel="stylesheet" href="/style.css">
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #111;
          color: #00ff41;
          text-align: center;
          padding: 50px;
        }
        h1 { color: #ff073a; }
        .nav-header {
          background: #000;
          padding: 20px;
          text-align: center;
          border-bottom: 2px solid #ff073a;
        }
        .nav-header a {
          color: #00ff41;
          text-decoration: none;
          margin: 0 20px;
          font-size: 1.2em;
          text-shadow: 0 0 5px #00ff41;
        }
        .nav-header a:hover {
          color: #ff073a;
          text-shadow: 0 0 5px #ff073a;
        }
        .content {
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
        }
      </style>
    </head>
    <body>
      <header class="nav-header">
        <a href="/">🏠 Home</a>
        <a href="/durer.html">🎨 Albrecht Dürer</a>
        <a href="#about">📖 About</a>
        <a href="#contact">📧 Contact</a>
      </header>

      <div class="content">
        <h1>🚀 Royal Library of Marganarok</h1>
        <p>Welcome to the sacred digital ministry platform.</p>
        <p>Express.js is running successfully!</p>
      </div>
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