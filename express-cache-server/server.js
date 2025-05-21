// server.js
const express = require('express');
const path = require('path');

const app = express();
const distPath = path.join(__dirname, "../");

app.use(express.static(distPath, {
  setHeaders(res, filePath) {
    if (filePath.endsWith('.css') || filePath.endsWith('.js')) {
      res.setHeader('Cache-Control', 'public, max-age=15, stale-while-revalidate=60');
    }
  }
}));

app.listen(3000, () => {
  console.log('Production server running at http://localhost:3000');
});