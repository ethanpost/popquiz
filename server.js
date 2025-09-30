const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from current directory
app.use(express.static('.'));

// Endpoint to get list of available quizzes
app.get('/api/quizzes', (req, res) => {
  try {
    const files = fs.readdirSync('.');
    const quizFiles = files
      .filter(file => file.endsWith('.json') && file.startsWith('quiz'))
      .map(file => ({
        name: file.replace('.json', '').replace('quiz', 'Quiz ').replace(/(\d+)/, '$1'),
        file: file
      }));
    
    res.json(quizFiles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read quiz files' });
  }
});

app.listen(PORT, () => {
  console.log(`Quiz server running at http://localhost:${PORT}`);
});
