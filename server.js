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
          padding: 15px;
          text-align: center;
          border-bottom: 2px solid #ff073a;
          overflow-x: auto;
          white-space: nowrap;
        }
        .nav-header a {
          color: #00ff41;
          text-decoration: none;
          margin: 0 8px;
          font-size: 0.9em;
          text-shadow: 0 0 5px #00ff41;
          display: inline-block;
          padding: 5px 8px;
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        .nav-header a:hover {
          color: #ff073a;
          text-shadow: 0 0 5px #ff073a;
          background: rgba(255, 7, 58, 0.1);
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
        
        <!-- Renaissance Masters -->
        <a href="/durer.html">🎨 Dürer</a>
        <a href="/Leonardo da Vinci Typography Techniques.html">🖌️ Da Vinci Typography</a>
        <a href="/DA VINCI DECODER.html">🔍 Da Vinci Decoder</a>
        <a href="/leonardo_five_pages.html">📄 Leonardo Five Pages</a>
        
        <!-- AI & Technology -->
        <a href="/ai_capabilities_analyzer.html">🤖 AI Analyzer</a>
        <a href="/ai_studio_code.html">💻 AI Studio</a>
        <a href="/llm_creation_guide (1).html">📚 LLM Guide</a>
        <a href="/pattern_recognition_portal (1).html">🎯 Pattern Portal</a>
        
        <!-- Esoteric & Mystical -->
        <a href="/sacred_codex.html">📜 Sacred Codex</a>
        <a href="/cosmic_angelic_portal (1).html">👼 Cosmic Angels</a>
        <a href="/alchemist_stones_research.html">💎 Alchemist Stones</a>
        <a href="/master_alphabet_portal.html">🔤 Master Alphabet</a>
        <a href="/apotropaic_magic_portal (1).html">🛡️ Apotropaic Magic</a>
        <a href="/cosmic_physics_portal.html">🌌 Cosmic Physics</a>
        <a href="/milky_way_cosmic_portal.html">🌠 Milky Way Portal</a>
        
        <!-- Research & Science -->
        <a href="/higgs_boson_research.html">⚛️ Higgs Boson</a>
        <a href="/parasite_research_ecosystem (2).html">🦠 Parasite Research</a>
        <a href="/pyramid_archaeology_portal (1).html">🏛️ Pyramid Archaeology</a>
        <a href="/wenchi_chieftaincy_chronicle.html">👑 Wenchi Chieftaincy</a>
        <a href="/tom_riddle_analysis.html">🧙 Tom Riddle Analysis</a>
        
        <!-- Creative Arts -->
        <a href="/full_art_gallery.html">🎨 Art Gallery</a>
        <a href="/creative_grimoire_gallery (1).html">📖 Grimoire Gallery</a>
        <a href="/cosmic_angels_art (1).html">✨ Cosmic Angels Art</a>
        <a href="/blueprint-car-engine (3).html">🚗 Blueprint Engine</a>
        <a href="/creative_grimoire_website.html">🌟 Creative Grimoire</a>
        
        <!-- Practical Guides -->
        <a href="/practical_wellness_guide.html">🌿 Wellness Guide</a>
        <a href="/product_comparison_guide (2).html">📊 Product Comparison</a>
        <a href="/audit_methodology_framework (1).html">📋 Audit Framework</a>
        <a href="/research_health_balance.html">⚖️ Health Balance</a>
        
        <!-- Special Projects -->
        <a href="/alchemist_pack_product_page.html">🔮 Alchemist Pack</a>
        <a href="/The Divine Leash Principle.html">🪢 Divine Leash</a>
        <a href="/THE-MISSION.html">🎯 THE MISSION</a>
        
        <!-- Contact -->
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