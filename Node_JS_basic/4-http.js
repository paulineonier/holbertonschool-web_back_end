// 4-http.js
const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

// Server listens on port 1245
app.listen(1245);

module.exports = app;
